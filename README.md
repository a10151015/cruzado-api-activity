RESTful API Activity - cruzadoivy

## Best Practices Implementation

1. Environment Variables:**
Why did we put `BASE_URI` in `.env` instead of hardcoding it?  
  Answer:Environment variables allow flexibility and security. By keeping `BASE_URI` in `.env`, we can easily change the API version or base path without modifying the source code. This prevents hardcoding values that may differ between development, testing, and production environments, and makes the application more maintainable.

2. Resource Modeling:
 Why did we use plural nouns (e.g., `/dishes`) for our routes?  
  Answer: RESTful conventions recommend using plural nouns to represent collections of resources. For example, `/dishes` refers to the entire set of dish items, while `/dishes/:id` refers to a single resource. This makes the API more intuitive, consistent, and aligned with industry standards.


3. Status Codes
 When do we use `201 Created` vs `200 OK`?  
  Answer: `201 Created` is used when a new resource is successfully created (e.g., after a POST request). `200 OK` is used when an existing resource is successfully retrieved, updated, or deleted. Using the correct status code communicates the exact outcome of the request to the client.  

 Why is it important to return `404` instead of just an empty array or a generic error?  
Answer:Returning `404 Not Found` clearly indicates that the requested resource does not exist. An empty array or generic error could confuse the client into thinking the request was valid but simply returned no data. Proper status codes improve API usability and help developers handle errors correctly.

---
 
