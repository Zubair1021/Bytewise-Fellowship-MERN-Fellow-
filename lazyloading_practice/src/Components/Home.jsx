import { Link } from "react-router-dom"

const Home = () => {
    return (
        <main className="home">
            <h2>Home</h2>
            <p>
                <Link to="/admin" Style=" color: Red; font-size:20px; text-decoration:none">Click to go to Admin Page </Link>
            </p>
        </main>
    )
}
export default Home