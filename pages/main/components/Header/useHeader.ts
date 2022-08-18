import { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMainSlice } from "../../slice/hooks";
import { counter } from "../../slice/selector";

export const useHeader = () => {
    const dispatch = useDispatch();
    const { actions } = useMainSlice();
    const [content, setContent] = useState("Header loading");

    const count = useSelector(counter);

    const increaseCount = useCallback(() => {
        dispatch(actions.setCounter(count + 1))
    }, [dispatch, actions, count]);

    const changeNameFromApi = useCallback(() => {
        setContent("Header loaded ");
    }, [setContent])

    return { content, changeNameFromApi, count, increaseCount }
};