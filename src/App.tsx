import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import { GET_TICKETS_URL } from './constants';
import { loadGrid, mapUsersByUserId } from './utils';
import { Ticket, User } from './interfaces';
import Loader from './components/Loader';
import './App.css'
// 21BCE3239
function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [userData, setUserData] = useState<Record<string, User>>({});
  const [gridData, setGridData] = useState<Record<string, Ticket[]>>({});
  const [grouping, setGrouping] = useState<string>("status");
  const [ordering, setOrdering] = useState<string>("priority");
  const [loading, setLoading] = useState(true);
// 21BCE3239
  useEffect(() => {
    loadSettings();
    fetch(GET_TICKETS_URL).then(resp => resp.json()).then(res => {
      const { tickets, users } = res;
      setTickets(tickets);
      setUserData(mapUsersByUserId(users));
    }).catch(err => { });
  }, [])
// 21BCE3239
  useEffect(() => {
    if (!tickets.length)
      return;
    setGridData(loadGrid(tickets, grouping, ordering));
    setLoading(false);
  }, [grouping, ordering, tickets])
// 21BCE3239
  const onSetGrouping = useCallback((value: string) => {
    setLoading(true);
    setGrouping(value);
    saveSettings({ grouping: value });
  }, []);
// 21BCE3239
  const onSetOrdering = useCallback((value: string) => {
    setLoading(true);
    setOrdering(value);
    saveSettings({ ordering: value });
  }, []);
// 21BCE3239
  const saveSettings = useCallback((data: Record<string, string>) => {
    for (let key in data)
      localStorage.setItem(key, data[key]);
  }, []);
// 21BCE3239
  const loadSettings = useCallback(() => {
    setGrouping(localStorage.getItem("grouping") || "status");
    setOrdering(localStorage.getItem("ordering") || "priority");
  }, []);
// 21BCE3239
  return (
    <div className="App">
      <Header grouping={grouping} setGrouping={onSetGrouping} ordering={ordering} setOrdering={onSetOrdering} />
      {loading ? <Loader /> :
        <Grid gridData={gridData} grouping={grouping} userIdToData={userData} />
      }
    </div>
  );
}
// 21BCE3239

export default App;