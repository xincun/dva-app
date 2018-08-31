import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const SymoblList = ({ onDelete, symbols }) => {

    console.log("symbols", symbols);

    /*
    "comment": "abcfdsf",
	"product": "dingtalk",
	"store_path": "d:\\a",
	"version": "v111",
	"symbol_path": "pdb",
	"date": "2018-08-27 08:05:46.935000",
	"store_id": "41"
 */

    this.state = {
    }
    const columns = [{
        title: 'Product',
        dataIndex: 'product',
    },
    {
        title: 'StoreId',
        dataIndex: 'store_id',
    },
    {
        title: 'StorePath',
        dataIndex: 'store_path',
    },
    {
        title: 'Version',
        dataIndex: 'version',
    },
    {
        title: 'Comment',
        dataIndex: 'comment',
    },
    {
        title: 'Date',
        dataIndex: 'date',
    },
    {
        title: 'Actions',
        render: (text, record) => {
            return (
                <Popconfirm title="Delete?" onConfirm={() => onDelete(record)}>
                    <Button>Delete</Button>
                </Popconfirm>
            );
        },
    }];
    return (
        <Table
            dataSource={symbols.datas}
            columns={columns}
            bordered
            loading={symbols.loading}
        />
    );
};

SymoblList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    symbols: PropTypes.object.isRequired,
};

export default SymoblList;