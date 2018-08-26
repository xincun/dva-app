import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }) => {

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
            dataSource={products.datas}
            columns={columns}
            bordered
            loading={products.loading}
        />
    );
};

ProductList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    products: PropTypes.object.isRequired,
};

export default ProductList;