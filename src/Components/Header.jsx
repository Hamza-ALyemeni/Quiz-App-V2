import ImageLogo from '../assets/quiz-logo.png'

export default function Header() {
    return <header>
        <img src={ImageLogo} alt="Logo Image" />
        <h1>ReactQuiz</h1>
    </header>
}