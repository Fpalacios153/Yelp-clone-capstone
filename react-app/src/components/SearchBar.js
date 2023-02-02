import { useState } from 'react'
export default function SearchBar() {
    const [word, SetWord] = useState('')
    return (
        <>
            <label>
                <input
                    type='text'
                    placeholder='Enter Search Word'
                    value={word}
                    onChange={(e) => SetWord(e.target.value)}
                >
                </input>
            </label>
        </>
    )
}
