export const SingleRender = ({ first_name, avatar, email }) => {

    return (
        <div className="users card">
            <p> {first_name} </p>
            <img
                title={first_name}
                src={avatar} />
            <p className="mail">{email}</p>
        </div>
    )
}