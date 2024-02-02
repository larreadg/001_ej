import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

  const formatUserName = (userName) => `@${userName}`

  return (
    <section className='App'>
      <TwitterFollowCard initialIsFollowing={true} formatUserName={formatUserName} username="midudev" name="Miguelito" />
      <TwitterFollowCard formatUserName={formatUserName} username="elonmusk" name="Elon Musk" />
      <TwitterFollowCard formatUserName={formatUserName} username="vxnder" name="Vanderhart" />
    </section>
  )

}
