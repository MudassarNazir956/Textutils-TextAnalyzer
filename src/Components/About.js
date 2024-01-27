import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // });

    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'#042743':'white',
    }

    // const [btntext, setBtnText] = useState('Enable Dark Mode');
    // const toogleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //         })
    //         setBtnText('Enable Light Mode')
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText('Enable Dark Mode')
    //     }
    // }
    return (
        <>
            <div className="container" style={myStyle}>
                <h1 className="my-2">About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingOne" style={myStyle}>
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                                Analyze Your Text
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                TextUtils gives you a way to analyze your text in a quick and efficiently way. Be it Word counter as well as Character Counter and many more. One important thing to note about textutils is that they can be incredibly versatile and can be used for a wide range of tasks related to text manipulation and analysis. For example, textutils can be used for tasks such as:

                                1. Proofreading and grammar checking: Textutils can help identify spelling errors, grammatical mistakes, and other issues in your text, helping to improve its overall quality and readability.

                                2. SEO optimization: Textutils can help analyze your content for relevant keywords and suggest optimizations to improve your content's search engine rankings.

                                3. Text analysis: Textutils can be used to analyze the structure and complexity of your text, including metrics such as word count, sentence length, and reading level.

                                4. Content creation: Textutils can help generate new ideas and inspiration for content creation, as well as provide tools for organizing and structuring your content.

                                Overall, textutils are an incredibly powerful and versatile tool for anyone working with text-based content. By leveraging the capabilities of these tools, you can improve the quality and relevance of your content, save time and effort, and stay up-to-date with the latest trends and best practices in your field.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingTwo" style={myStyle}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                                Free to Use
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            While there are many textutils available for free online, it's important to note that not all textutils are free to use. Some textutils may require a paid subscription or a one-time purchase fee to access all of their features or to remove usage restrictions. That being said, there are many high-quality textutils that are available for free. Some popular options include Grammarly, Hemingway Editor, and Yoast SEO. These tools offer a range of features that can help you with everything from proofreading and grammar checking to analyzing your content's readability and SEO performance. While free textutils may not offer all the features of their paid counterparts, they can still be incredibly valuable resources for anyone working with text-based content. They can help you improve the quality and relevance of your content, save time and effort, and stay up-to-date with the latest trends and best practices in your field. In summary, while not all textutils are free to use, there are many high-quality options that are available for free. These tools can be incredibly valuable resources for anyone working with text-based content, offering a range of features that can help you improve the quality and relevance of your content, save time and effort, and stay up-to-date with the latest trends and best practices in your field.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingThree" style={myStyle}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                                Browser Compatible
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                            While there are many textutils available for free online, it's important to note that not all textutils are free to use. Some textutils may require a paid subscription or a one-time purchase fee to access all of their features or to remove usage restrictions. That being said, there are many high-quality textutils that are available for free. Some popular options include Grammarly, Hemingway Editor, and Yoast SEO. These tools offer a range of features that can help you with everything from proofreading and grammar checking to analyzing your content's readability and SEO performance.While free textutils may not offer all the features of their paid counterparts, they can still be incredibly valuable resources for anyone working with text-based content. They can help you improve the quality and relevance of your content, save time and effort, and stay up-to-date with the latest trends and best practices in your field.In summary, while not all textutils are free to use, there are many high-quality options that are available for free. These tools can be incredibly valuable resources for anyone working with text-based content, offering a range of features that can help you improve the quality and relevance of your content, save time and effort, and stay up-to-date with the latest trends and best practices in your field.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className="btn btn-primary my-2" onClick={toogleStyle}>{btntext}</button> */}
            </div>
        </>
    )
}
