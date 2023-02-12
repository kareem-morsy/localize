import React from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next'



const Home = () =>{
  const { t } = useTranslation();
  const username = "Kareem";
  return (
    <>
      <div className='body'>
        <p>Welcome</p>

        <div>
          <label>{t('change-username')}</label>
          <input type='text' />
          <button>{t('submit')}</button>
        </div>

        <p>
          <Trans i18nKey='go-to-page2'>
            <Link to='/page2'></Link>
            {{username}}
          </Trans>
          {/* Click <Link to='/page2'>here</Link> to go to page 2, {username} */}
          </p>
        </div>
    </>
  );
}

export default Home;

// class Home extends Component {
//   constructor() {
//     super();

//     this.state = {
//       nextUsername: '',
//       username: 'default user'
//     };
//   }

//   updateUsername(e) {
//     this.setState({
//       nextUsername: e.target.value
//     })
//   }

//   setUsername() {
//     this.setState({
//       username: this.state.nextUsername
//     })
//   }

//   render() {
//     const { username } = this.state;

//     return (
//       <div className='body'>
//         <p>Welcome, {username}</p>

//         <div>
//           <label>Change your username:</label>
//           <input type='text' onChange={this.updateUsername.bind(this)} />
//           <button onClick={this.setUsername.bind(this)}>Submit</button>
//         </div>

//         <p>Click <Link to='/page2'>here</Link> to go to page 2, {username}</p>
//       </div>
//     );
//   }
// }

// export default Home;
