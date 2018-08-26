import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products, loading }) => {

    console.log("products", products);

    this.state = {
    }
    const columns = [{
        title: 'Name',
        dataIndex: 'name',
    }, {
        title: 'Actions',
        render: (text, record) => {
            return (
                <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                    <Button>Delete</Button>
                </Popconfirm>
            );
        },
    }];
    return (
        <Table
            dataSource={products}
            columns={columns}
            bordered
            loading={loading}
        />
    );
};

ProductList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    // loading: PropTypes.boolean.isRequired,
};

export default ProductList;