import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Space, Table } from 'antd';
import { useState } from "react";

const App = () => {
    let data = [];
    const name = ['Jack 5 củ', 'Jack 14 củ', 'Cây ATM']
    const date = new Date().toLocaleString();

    const [keyExpand, setKeyExpand] = useState(null);
    const [rowExpand, setRowExpand] = useState(null);

    for (let i = 0; i < 3; ++i) {
        data.push({
            key: i.toString(),
            name: 'Screen',
            platform: 'iOS',
            version: '10.3.4.5654',
            upgradeNum: 500,
            creator: name[i],
            createdAt: date,
        });
    }

    const handleExpand = (rowStatus, rowParams) => {
        setRowExpand(rowParams.key);
        setKeyExpand((rowStatus && rowParams.key === rowExpand ? rowParams.key : null));
    }

    return (
        <>
            {
                keyExpand ?
                <Table
                    columns={columns}
                    expandable={{
                        expandedRowRender,
                        expandedRowKeys: [keyExpand],
                    }}
                    dataSource={data}
                    onExpand={handleExpand}
                />
                :
                <Table
                    columns={columns}
                    expandable={{
                        expandedRowRender,
                        defaultExpandedRowKeys: [keyExpand ?? '1'],
                    }}
                    dataSource={data}
                    onExpand={handleExpand}
                />
            }
        </>
    );
};

const expandedRowRender = (element, index) => {
    const data = [];
    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Status',
            key: 'state',
            render: () => <Badge status="success" text="Finished"/>,
        },
        {
            title: 'Upgrade Status',
            dataIndex: 'upgradeNum',
            key: 'upgradeNum',
        },
        {
            title: 'Action',
            dataIndex: 'operation',
            key: 'operation',
            render: () => (
                <Space size="middle">
                    <a>Pause</a>
                    <a>Stop</a>
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a>
                            More <DownOutlined/>
                        </a>
                    </Dropdown>
                </Space>
            ),
        },
    ];

    if (index > 0) {
        for (let i = 0; i < 3; ++i) {
            data.push({
                key: i.toString(),
                date: '2014-12-24 23:12:00',
                name: 'This is production name',
                upgradeNum: 'Upgraded: 56',
            });
        }
    }
    return <Table columns={columns} dataSource={data} pagination={false}/>;
};

const items = [
    {
        key: '1',
        label: 'Action 1',
    },
    {
        key: '2',
        label: 'Action 2',
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Platform',
        dataIndex: 'platform',
        key: 'platform',
    },
    {
        title: 'Version',
        dataIndex: 'version',
        key: 'version',
    },
    {
        title: 'Upgraded',
        dataIndex: 'upgradeNum',
        key: 'upgradeNum',
    },
    {
        title: 'Creator',
        dataIndex: 'creator',
        key: 'creator',
    },
    {
        title: 'Date',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
    {
        title: 'Action',
        key: 'operation',
        render: () => <a>Publish</a>,
    },
];
export default App;