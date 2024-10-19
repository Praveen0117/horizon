import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import RightSiedbar from '@/components/ui/RightSiedbar'

const Home = () => {
    const loggedIn = {firstName: 'Praveen', lastName:'Polaki' , email:'praveen@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
            <HeaderBox 
                type="greeting"
                title="Welcome"
                user={loggedIn ?. firstName || 'Guest'}
                subtext='Access and manage your account and transactions efficiently.'
            />
            <TotalBalanceBox 
                  accounts = {[]}
                  totalBanks = {1}
                  totalCurrentBalance = {1250.75}         
            />  
        </header>
      </div>
      <RightSiedbar 
          user = {loggedIn}
          transactions = {[]}
          banks={[{currentBalance:5050},{currentBalance:1564.20}]}
          />
    </section>
  )
}

export default Home
