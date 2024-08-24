import { useAppSelector, useAppDispatch } from "../hooks/hooks.js";
import { useEffect } from "react";
import { actions as cocktailsActions } from "../store/cocktails/cocktails.js";

function App() {
  const dispatch = useAppDispatch();
  const { data, dataStatus } = useAppSelector(({ cocktails }) => ({
    data: cocktails.collection,
    dataStatus: cocktails.dataStatus,
  }));

  useEffect(() => {
    void dispatch(cocktailsActions.loadAll());
  }, []);

  return (
    <>
      <div>
        <h1>{JSON.stringify(dataStatus)}</h1>
        {/* <h1>{JSON.stringify(data)}</h1> */}
      </div>
    </>
  );
}

export default App;
