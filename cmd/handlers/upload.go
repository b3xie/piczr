package handlers

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func PhotoUpload(w http.ResponseWriter, r *http.Request) {
	err := r.ParseMultipartForm(209715200)
	if err != nil {
		return
	}
	file, handler, err := r.FormFile("photo")
	if err != nil {
		panic(err)
	}
	defer file.Close()
	dst, err := os.Create("assets/" + handler.Filename)
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
		println("error writing to file:" + handler.Filename)
		fmt.Println(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusOK)
}
