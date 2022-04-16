import React, { forwardRef } from 'react';
import AdminHeader from '../Component/AdminHeader';
import Footer from '../Component/Footer';
import MaterialTable from 'material-table';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

export default function Employes() {
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };
    return (
        <>
            <AdminHeader />
            <div className="main-content">
                <section>
                    <div className='card'>
                        <div className='card-header row'>
                            <div className='col-md-6'>
                                <h5 className='mb-0'>Employes</h5>
                            </div>
                            <div className='col-md-6'>
                                <Button variant="outlined" className='float-right' startIcon={<AddIcon />}></Button>
                            </div>
                        </div>

                        <div className='card-body col-md-12'>
                            <MaterialTable
                                title=""
                                icons={tableIcons}
                                columns={[
                                    { title: 'ID', field: 'id' },
                                    { title: 'Name', field: 'Name' },
                                    { title: 'Email', field: 'Email' },
                                    { title: 'Address', field: 'Address' },
                                    { title: 'Phone No', field: 'Phone No' },
                                ]}
                                // data={data}
                                actions={[
                                    rowData => ({
                                        icon: 'insert_invitation',
                                        tooltip: 'Invite',
                                        // onClick: (event, rowData) => edit(rowData)
                                    })
                                ]}
                                options={{
                                    actionsColumnIndex: -1
                                }}
                            />
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    )
}