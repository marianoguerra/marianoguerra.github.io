
build: diagrams slides

slides:
	rst2html5 --embed-images --jquery --reveal-js --stylesheet-path style.css --reveal-js-opts theme=serif --pretty-print-code --pretty-print-code-opts langs=erlang index.rst > index.html
	sed -i 's/<body class="reveal/& none/g' index.html

sequence-diagrams:
	plantuml sequence-diagram.txt
	plantuml sequence-diagram-1.txt

diagrams: sequence-diagrams
	plantuml plumtree-*.txt

open:
	firefox index.html

upload:
	scp index.html marianoguerra@marianoguerra.org:/home/marianoguerra/marianoguerra.org/talks/erlang-factory-berlin-2016

