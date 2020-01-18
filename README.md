# Front-End Coding Challenge

## Task

Create a simple interface for viewing the latest Batman movies as a vertical list of ten movies which can also be filtered by decade.

A UI mockup can be found in the included `moviemock.sketch` file (or `moviemock.pdf` if you don't have Sketch).
Only one movie is shown in the mockup, but use that as a template for the other 9.

## Requirements
* Build using the latest version of AngularJS or Angular, whichever is most comfortable to you.
* Use SASS to write your css and compile it down.
* Write your JavaScript using either vanilla js or using TypeScript and compile it down.
* Build and include at least one Angular component.
* Make sure your code is supported by Chrome, FF, and IE11.
* Publish your completed project to a github repo provide us with a link.

## APIs

Sign up for a free api key to use the Movie service here:
http://www.omdbapi.com/apikey.aspx

Using the first 10 results of this api search for batman movies:
http://www.omdbapi.com/?s=Batman

Take those results and look up details for each movie returned using this api pattern:
http://www.omdbapi.com/?i=tt0372784 (where i = the imdb id found above)

Hint: Images will be blocked from hotlinking. Manually download all of those images to the project first, then reference them locally (parse the url string from the response).
