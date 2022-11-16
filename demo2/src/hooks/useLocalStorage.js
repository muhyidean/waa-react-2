import { useState, useEffect } from "react";

function getSavedValue(key, initalState) {
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue

}

export default function useLocalStorage(key, initalState) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initalState)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}