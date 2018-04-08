import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <p>
          <a href="https://github.com/brianbixby" rel="noopener noreferrer" target="_blank"><span><i className="fa fa-github fa-3x"></i></span> </a>
          <a href="https://www.linkedin.com/in/brianbixby1/" rel="noopener noreferrer" target="_blank"><span><i className="fa fa-linkedin fa-3x"></i></span></a>
          {/* <i onClick={this.handleDelete} className='fa fa-trash-o fa-3x' /> */}
        </p>
        <i className='fa fa-trash-o fa-3x' />
      </footer>
    );
  }
}

export default Footer;