package handlers

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"time"
)

func PhotoUpload(w http.ResponseWriter, r *http.Request) {
	err := r.ParseMultipartForm(209715200)
	if err != nil {
		w.Header().Set("error", err.Error())
		w.WriteHeader(http.StatusRequestEntityTooLarge)
		return
	}
	unixTime := time.Now()
	file, handler, err := r.FormFile("photo")
	if err != nil {
		fmt.Println("errororo")
		w.WriteHeader(http.StatusInternalServerError)
	}
	defer file.Close()
	filename := string(unixTime.Unix()) + handler.Filename
	dst, err := os.Create("../../assets/" + filename)
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
	w.WriteHeader(http.StatusOK)
}
