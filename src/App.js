
import { Header, Footer, AccessContainer, Notice } from "./components/index.js"
import { NoticeContent, ScheduleContent} from "./NoticeData.js"
import styles from "./styles/App.module.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <div className={styles.bigContainer}>
      <AccessContainer/>
      <Notice title="학사일정" contents={ScheduleContent}/>
      <Notice title="공지사항" contents={NoticeContent}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
