package handlers

import (
	"fmt"
	"os/exec"
)

func ImgPreview(filename string, timestamp string) (string, error) {
	cachedFile := "cache" + timestamp + ".png"
	command := fmt.Sprintf("magick %s -colorspace sRGB -auto-orient ./cache/%s", filename, cachedFile)
	cmd := exec.Command("bash", "-c", command)
	cmd.Dir = "../assets"
	_, err := cmd.CombinedOutput()
	if err != nil {
		return "", err
	}
	fmt.Println(cachedFile)
	return cachedFile, nil
}
