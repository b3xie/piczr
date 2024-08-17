package handlers

import (
	"fmt"
	"io"
	"mime/multipart"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"time"
)

func PhotoUpload(w http.ResponseWriter, r *http.Request) {
	err := r.ParseMultipartForm(209715200)
	if err != nil {
		w.WriteHeader(http.StatusRequestEntityTooLarge)
		return
	}
	unixTime := time.Now()
	file, handler, err := r.FormFile("photo")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	defer func(file multipart.File) {
		err := file.Close()
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
	}(file)
	timestamp := strconv.FormatInt(unixTime.Unix(), 10)
	filename := filepath.Clean("img" + timestamp + handler.Filename)
	fmt.Println(timestamp)
	dst, err := os.Create("../assets/" + filename)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	defer func(dst *os.File) {
		err := dst.Close()
		if err != nil {
			panic(err)
		}
	}(dst)
	if _, err := io.Copy(dst, file); err != nil {
		println("error writing to file:" + filename)
		fmt.Println(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	result, err := ImgPreview(filename, timestamp)
	if err != nil {
		w.Header().Set("Error:", "Could not generate preview")
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	if result == "" {
		w.Header().Set("Error:", "Could not generate preview")
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	fileBytes, err := os.Open("../assets/cache/" + result)
	if err != nil {
		http.Error(w, "File not found.", http.StatusInternalServerError)
		return
	}
	defer file.Close()
	w.Header().Set("Content-Type", "image/png")
	w.Header().Set("filename", filename)
	_, err = io.Copy(w, fileBytes)
	if err != nil {
		println("error writing to response")
		w.Header().Set("Error:", "Error writing file to return")
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusOK)
	return
}
