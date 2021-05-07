import React from 'react'
import { Calendar, Badge, Popover } from 'antd';

export default function CalendarHome() {
  const getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  }
  const content = (listData) => {
    return (
      <ul className="events" style={{ listStyleType: "none"}}>
        {listData.map(item => (
          <li key={item.content}>        
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    )
  }

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        <Popover trigger="hover" content={content(listData)} placement="topLeft">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
        </Popover>
      </ul>
    );
  }
  return (
    <Calendar dateCellRender={dateCellRender}/>
  )
}
