class ToDoService {
  _apiUrl = "https://jsonplaceholder.typicode.com/comments";

  onGetResponse = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      return new Error("Error, status code: " + response.status); 
    }

    return response.json();
  }

  getToDoResponse = async () => {
    const todo = await this.onGetResponse(this._apiUrl);
    return todo;
  }
}

export default ToDoService;