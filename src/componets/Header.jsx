import logoImg from'../assets/quiz-logo.png'
export default function Header(){
    return <header>
     <img src={logoImg} alt="Quiz Logo"></img>
     <h1> FunQuiz</h1>
    </header>
}