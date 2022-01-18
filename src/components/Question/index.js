import React from 'react'

export default function Question({ question }) {
    return (
        <div className="questionFormat">
            <p>{question}</p>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label htmlFor="html">HTML</label>
            <br />
            <input type="radio" id="css" name="fav_language" value="CSS" />
            <label htmlFor="css">CSS</label>
            <br />
            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
            <label htmlFor="javascript">JavaScript</label>
            <br />
            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
            <label htmlFor="javascript">JavaScript</label>
        </div>
    )
}

// when the input is inside a label - no need for htmlfor and id as it is explicit