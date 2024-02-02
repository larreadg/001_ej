import { useState } from "react"

export function TwitterFollowCard({ formatUserName, username, name, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button isFollowing' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img
            className="tw-followCard-avatar" 
            src={`https://unavatar.io/${username}`}
            alt={`Avatar de ${username}`} />
          <div className="tw-followCard-info">
            <strong>{name}</strong>
            <span className="tw-followCard-infoUserName">{formatUserName(username)}</span>
          </div>
        </header>
        <aside>
          <button onClick={handleClick} className={buttonClassName}>
            {text}
          </button>
        </aside>
      </article>
    )

  }
  