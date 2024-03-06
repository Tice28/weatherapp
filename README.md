# weatherapp

<h1>Purpose</h1>
<p>The purpose of this application is to demonstrate my ability to take data from an api and process it in a way that is consumable by an end user.</p>

<h1>Goals</h1>
<ul>
<li>Use an API to gather data</li>
<li>Display API data practically</li>
<li>Create an easy to use, simple weather application</li>
</ul>

<h1>What I learned</h1>
<ul>
<li>Usage of an API</li>
<li>How to handle errors associated with API via the status returned on a bad query</li>
<li>How to handle Mixed-Content errors with HTTP and HTTPS conflicts</li>
</ul>

<h1>Summary</h1>
<p>This project, although simple in scope, has taught me a lot about API usage. Encountering the mixed-content error reminded me that there is in fact a difference in how data is served to the client. It also forced me to think about the safety of the data as well as how to structure my projects moving forward. An example of this is the background image. Originally located in the /img directory, this conflicted with the HTTPS protocol, so I moved it in order to serve the image dynamically rather than having an absolute path using HTTP.</p>
