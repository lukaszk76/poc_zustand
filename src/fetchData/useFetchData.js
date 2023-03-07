import {useComponent1State} from "../PresentationComponent1/PresentationComponent1.state.js";
import {useComponent2State} from "../PresentationComponent2/PresentationComponent2.state.js";

export function useFetchData() {
  const setComponent1Data = useComponent1State((state) => state.setData);
  const setComponent2Data = useComponent2State((state) => state.setData);

  const fetchData = async () => {

    // Fetch data for component 1
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setComponent1Data(data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch data for component 2
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setComponent2Data(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {fetchData};
}