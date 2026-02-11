# Restful-api-actvity -cruzadoivy


## Best Practices Implementation

**1. Environment Variables:**
- Why did we put `BASE_URI` in `.env` instead of hardcoding it?  
- **Answer:** Storing `BASE_URI` in `.env` makes the application more secure and flexible. It prevents sensitive or environment-specific values from being exposed in the codebase, allows easy configuration changes without modifying source code, and supports different environments (development, staging, production) seamlessly.


**2. Resource Modeling:**
- Why did we use plural nouns (e.g., `/dishes`) for our routes?  
- **Answer:** RESTful conventions recommend using plural nouns to represent collections of resources. For example, `/dishes` represents the entire set of dish resources, while `/dishes/{id}` refers to a single resource. This improves clarity, consistency, and aligns with widely accepted API design standards.

**3. Status Codes:**
- When do we use `201 Created` vs `200 OK`?  
- **Answer:**  
  - `201 Created` is used when a new resource has been successfully created (e.g., after a POST request).  
  - `200 OK` is used when a request succeeds but does not involve creating a new resource (e.g., GET or successful PUT).  

- Why is it important to return `404` instead of just an empty array or a generic error?  
- **Answer:** Returning `404 Not Found` clearly communicates that the requested resource does not exist. An empty array or generic error could mislead clients into thinking the request was valid but returned no data. Proper status codes improve API usability, debugging, and adherence to HTTP standards.

---



Activity #3


Why did I choose to Embed the [Review/Tag/Log]?  
I chose to embed the Review/Tag/Log because these pieces of information are tightly coupled with the main entity they belong to. For example, a Review is specific to a particular recipe or dish, and a Tag is directly tied to the item it describes. Embedding them makes retrieval faster and simpler since they are always accessed together with the parent document. This avoids unnecessary joins or lookups and keeps related data in one place, which is efficient for queries that frequently need the whole object.

Why did I choose to Reference the [Chef/User/Guest]?  
I chose to reference the Chef/User/Guest because these entities are independent and may be reused across multiple documents. For instance, a single Chef can be associated with many recipes, and a User can leave multiple reviews. By referencing them, I avoid duplicating their information in every related document. This design also makes updates easier—if a Chef’s profile changes, I only need to update it in one place, and all references remain valid.


