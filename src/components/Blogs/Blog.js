import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-5'>Questions & Answers Section</h1>
            {BasicExample()}
        </div>
    );
};



function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is the purpose of react router?</Accordion.Header>
        <Accordion.Body>
        React Router is a standard library for routing in React. It enables the navigation 
        among views of various components in a React Application, 
        allows changing the browser URL, and keeps the UI in sync with the URL
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How does context api works?</Accordion.Header>
        <Accordion.Body>
        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent,
         and so on. Context is also touted as an easier, lighter approach to state management using Redux.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What is useref in react?</Accordion.Header>
        <Accordion.Body>
        Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
         You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with ref='{'myRef'}', 
        React will set its .current property to the corresponding DOM node whenever that node changes. <br/>
        However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.

        This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a current: ... object yourself is that useRef will give you the same ref object on every render.

        Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.


        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Blog;