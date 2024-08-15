package main

import (
	"github.com/b3xie/piczr/cmd/handlers"
	"net/http"
)

func main() {
	http.HandleFunc("/upload", handlers.PhotoUpload)
	err := http.ListenAndServe(":4500", nil)
	if err != nil {
		println(err.Error())
	}
}
