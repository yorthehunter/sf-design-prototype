import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="">
      <main className="content-wrapper">
        <h4>Eyebrow</h4>
        <h1>Page Header</h1>
        <h2>Primary Heading</h2>
        <h3>Section Header</h3>
        <p className="large-body-copy">Large body copy: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
        <p className="body-copy">Body copy: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
        <p className="small-body-copy">Small body copy: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
        <p className="caption">Caption: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>

        <h2>Heading</h2>
        <div className="h1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="h4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="h7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="h8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="h9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="h10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

        <h2>Body</h2>
        <div className="b1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="b2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="b3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="b4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="b5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="b6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="b7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="b8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="b9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="b10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

        <h2>Component</h2>
        <div className="c1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="c2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="c3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="c4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="c5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="c6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="c7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="c8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="c9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className="c10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

        <p className="t1">Hello</p>
        <p className="t2">Hello</p>
        <p className="t3">Hello</p>
        <p className="t4">Hello</p>
        <p className="t5">Hello</p>
        <p className="t6">Hello</p>
        <p className="t7">Hello</p>
        <p className="t8">Hello</p>
        <p className="t9">Which Stitch Fix perks interest you the most?
</p>
        <p className="t10">Hello</p>

        <h1 className="page-header">Sign In</h1>

        <form>
          <div className="form-element">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="form-element">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="form-element">
            <button type="submit">Sign In</button>
          </div>
        </form>

        <div className="background-rule"><span>Or</span></div>
      </main>
      <div className="spacing-example">
        <div className="xs"></div>
        <div className="sm"></div>
        <div className="md"></div>
        <div className="lg"></div>
        <div className="xl"></div>
        <div className="xxl"></div>
      </div>
    </div>
  );
}

export default App;
