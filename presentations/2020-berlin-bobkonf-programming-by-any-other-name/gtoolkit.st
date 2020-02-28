
show := GtSlideShow new.
show slides:
	{GtFilePictureSlide new
		fileReference: (GtResourceReference path: Path * 'feenkcom' / 'gtoolkit' / 'doc' / 'gtoolkit.png').
	"Here are 6 objects in 6 inspectors. From afar they all look the same."
	GtLabelAndElementSlide new
		element: [ GtRawViewsSlide new asElement ].
	"But, they are not the same. Chaging the shape of these objects allows us to connect with their intent."
	GtLabelAndElementSlide new
		element: [ GtCustomViewsSlide new asElement ].
	"There are many ways to look at the same thing and they all have to be accommodated by the environment. This applies for everything in the environment, starting from an individual object."
	GtLabelAndElementSlide new
		element: [ GtAllViewsSlide new asElement ].
	"So what do we do with this ability?"
	"Here is a query that will find the methods annotated with gtView and that also send the list message. The search yeilds a filter object that knows how to view the code. This essentially transforms any Playground into a ."
	GtPlaygroundSlide new
		snippets: {'#gtView gtPragmas & #list gtReferences'}.
	"Here is an example of a document describing how to work with an annulus sector. IT feels like a notebook, only it is even more live and it is integrated in the development environment. The interesting thing is that neither the code samples nor the views are in the document. They are only inserted through a markup that is rendered live (go with the cursor next to the code snippet to see the markup). The views are inspector views."
	(GtElementSlide new
		element: [ (GtDocument forClass: BlAnnulusSectorExamples) asElement 
			look: BrShadowLook; margin: (BlInsets all: 50); background: Color white]).
	"And here it is how it can feel like when embedded in the inspection flow.
	For example, click on Gt Inspector in the map, and you will get another document. All these documents are actually class comments. And the whole environment feels like a wiki."
	(GtElementSlide new
		element: [ GtInspector withToolOn: (GtDocument forClass: BaselineOfGToolkit) ]).
	"Moldability applies to how we write code, too. This is the definition of a JavaScript parser. Search for the ifStatement. Expand the productions. Press on the debug button from the bottom left. On the right, enter a sample JS code like: if (x == 42) return true;. Below the code you see the AST being implemented live."
	(GtElementSlide new
		element: [ GtInspector withToolOn: (GtClassCoder forClass: JSParser)]).
	GtTitleSlide new title: 'moldability is pervasive'.
	"The visualization below shows a treemap of the classes and packages from the current image. Blue denotes classes that contain at least one custom view; green shows those that have an example."
	GtLabelAndElementSlide new
		element: [ GtTour new treemapWithViewsAndExamples ]
			 }.
show makeArrowsVisible. 
aSpace := BlSpace new.
aSpace title: 'Glamorous Toolkit'.
aSpace extent: 1200@600.
aSpace addChild: show create.
aSpace withHalos.
GtWorld openWithSpaces: { aSpace }
