import GlobalStyle from "../styles";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {

  const [isOn, setIsOn] = useState([{name: ""}, {id: ""}, {isOn:false}]);

  function handleToggle() {
    setIsOn((isOn) => !isOn);
  }
  return (
    <Layout>
      <GlobalStyle />
      <Component isOn={isOn} onToggle={handleToggle} {...pageProps} />
    </Layout>
  );
}
