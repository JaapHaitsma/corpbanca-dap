
SRC = manifest.json contentscript.js corpbanca-48.png corpbanca-128.png

corpbancadap.zip : $(SRC)
	zip $@ $^

.PHONY: clean

clean:
	rm corpbancadap.zip