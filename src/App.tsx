import { useEffect, useState } from 'react';
import style from './App.module.css'
import AllCharts from './components/AllCharts/AllCharts';
import Charts from './components/Charts/Chart';
import Header from './components/Header/Header';
import dataRequest from './utility/request'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer';
import List from './components/List/List';
import Loader from './components/Loader/Loader';

function App() {
  const [activeChart, setActiveChart] = useState({});
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [list, setList] = useState<string[]>([]);
  const [chartsSettings, setChartsSettings] = useState<object[]>([]);
  const [chartInd, setChartInd] = useState(-1);

  async function request() {
    try {
      setLoader(true)
      await dataRequest().then((res) => {
        const listArr: string[] = []
        const chartsSettingsArr: any[] = []
        const resArray = Object.entries(res);
        resArray.map(el => {
          listArr.push(el[0].split('_').join(' '));
          chartsSettingsArr.push(el[1]);
          return undefined
        })
        setList(listArr);
        setChartsSettings(chartsSettingsArr)
      })
    } catch (error) {
      setError(true)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    request()
  }, [])

  const changeCharts = (ind: number) => {
    setChartInd(ind)
    const active = chartsSettings[ind]
    setActiveChart(active)
  }

  return (
    <div className={style.app}>
      { loader && <Loader />}
      <Header >
        {chartsSettings.length !== 0 && <List list={list} onClick={changeCharts} chartInd={chartInd} />}
      </Header>
      <Layout>
        {chartInd !== -1 && <Charts elem={activeChart} ind={chartInd} />}
        {chartsSettings.length !== 0 && chartInd === -1 && <AllCharts data={chartsSettings} />}
        {error && <h1 className={style.error}>Oops somethitg went wront,  <a className={style.errorLink} href='/'> please try again</a></h1>}
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
