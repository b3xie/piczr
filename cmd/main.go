package main

import (
	"github.com/b3xie/piczr/cmd/handlers"
	"net/http"
	"path/filepath"
)

func ServeWeb(w http.ResponseWriter, r *http.Request) {
	path := "../web/public/assets/"
	safePath := filepath.Clean(path)
	http.ServeFile(w, r, safePath)
}

func main() {
	http.HandleFunc("/upload", handlers.PhotoUpload)
	staticDir := "../web/public/" // Change this if your static files are in a different directory

	// Serve static files
	fs := http.FileServer(http.Dir(staticDir))
	http.Handle("/assets", http.StripPrefix("/assets/", fs))
	http.Handle("/", http.FileServer(http.Dir(staticDir)))
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		println(err.Error())
	}
}
