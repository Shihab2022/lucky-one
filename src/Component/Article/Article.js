import React from 'react';
import './Article.css'
const Article = () => {
    return (
        <div className='container'>
            <div className="react-work">
                <h2>How React Work ?</h2>

                <p>React is a very popular JavaScript library.React basically maintains a tree for you . This tree is able to  do efficient different  on the nodes . JSX  is simply syntactic sugar for creating root DOM node . Rendering an element into the DOM will charge the user interface of the page . React Js divides the URL into isolated reosable piecs of code know as components  . React components work similarly to JavaScript function as they aaccept arbitaray inpots called propentie or props .</p>

            </div>

            <div className="props-state row">
                <h2>Props vs State</h2>
                <div className="col-md-6">
                <h4>Props</h4>
                <p>1.Props are immutable.</p>
                <p> 2.Props are read-only.</p>
                <p>3.Props can be used with stat and functional components .</p>
                <p>4 . Props make components reusable .</p>
                <p> 5 . Props are used to communicate between components .</p> 

                </div>
                <div className="col-md-6">
                <h4>State</h4>
                <p>1. State is mutable .</p>
                <p>2. Stage change can be asynchronuos</p>
                <p>3. State can be used only with the state components / class components .</p>
                <p>4. State can not make components reusable .</p>
                <p>5. State less components can not have state .</p>
                </div>
            </div>
             
             <div className="useState">
<h2>How to useState work ?</h2>
<p>useState is a function that accepts the initial state as an arguments and returns a state value and function to update this value . This ensures that React preservs the state between re-renders . the useState hook can be used to keep track of string ,numbers , booleans , array , objects, and any combination of these .
    It makes the state management in components very lean and simple . So we can easily use it anywhere without a second thought once you understand  its differen behaviour .</p>


             </div>
        </div>
    );
};

export default Article;