import React, { useState } from "react";
import { Grid, Box, Button, Typography, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Chart, ArcElement, Tooltip, Legend, CategoryScale, LinearScale ,BarElement} from 'chart.js';
import { Doughnut, Pie, Bar } from 'react-chartjs-2';
import { Edit, Delete } from '@mui/icons-material';

// Register chart components
Chart.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale,BarElement);

const Dashboard = () => {
  // State for CSPM Widgets
  const [dynamicCSPMWidgets, setDynamicCSPMWidgets] = useState([]);
  // State for CWPP Widgets
  const [dynamicCWPPWidgets, setDynamicCWPPWidgets] = useState([]);
  // State for Registry Scan Widgets
  const [dynamicRegistryWidgets, setDynamicRegistryWidgets] = useState([]);
  
  const [editWidgetData, setEditWidgetData] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  // Example data
  const cloudAccountsData = {
    labels: ['Connected', 'Not Connected'],
    datasets: [
      {
        label: 'Cloud Accounts',
        data: [2, 2],
        backgroundColor: ['#3498db', '#e74c3c'],
        hoverOffset: 4
      }
    ]
  };

  const cloudRiskData = {
    labels: ['Failed', 'Warning', 'Not Calculable', 'Passed'],
    datasets: [
      {
        label: 'Cloud Account Risk',
        data: [988, 98, 24, 7252],
        backgroundColor: ['#e74c3c', '#f39c12', '#95a5a6', '#2ecc71'],
        hoverOffset: 4
      }
    ]
  };

  const namespaceSpecificAlertsData = {
    labels: ['Namespace 1', 'Namespace 2', 'Namespace 3', 'Namespace 4', 'Namespace 5'],
    datasets: [
      {
        label: 'Top 5 Namespace Specific Alerts',
        data: [300, 250, 200, 150, 100],
        backgroundColor: ['#e74c3c', '#f39c12', '#3498db', '#9b59b6', '#2ecc71'],
      }
    ]
  };

  const workloadAlertsData = {
    labels: ['Critical', 'High', 'Medium', 'Low'],
    datasets: [
      {
        label: 'Workload Alerts',
        data: [50, 100, 150, 200],
        backgroundColor: ['#e74c3c', '#f39c12', '#3498db', '#2ecc71'],
      }
    ]
  };

  const imageRiskAssessmentData = {
    labels: ['Critical', 'High', 'Medium'],
    datasets: [
      {
        label: 'Image Risk Assessment',
        data: [12, 50, 30],
        backgroundColor: ['#e74c3c', '#f39c12', '#3498db'],
        hoverOffset: 4
      }
    ]
  };

  const imageSecurityIssuesData = {
    labels: ['Critical', 'High', 'Medium'],
    datasets: [
      {
        label: 'Image Security Issues',
        data: [8, 20, 40],
        backgroundColor: ['#e74c3c', '#f39c12', '#3498db'],
        hoverOffset: 4
      }
    ]
  };

  // Functions to handle CSPM Widgets
  const handleAddCSPMWidget = () => {
    setDynamicCSPMWidgets([
      ...dynamicCSPMWidgets,
      { id: Date.now(), name: "New CSPM Widget", data: cloudAccountsData }
    ]);
  };

  const handleRemoveCSPMWidget = (id) => {
    setDynamicCSPMWidgets(dynamicCSPMWidgets.filter(widget => widget.id !== id));
  };

  const handleEditCSPMWidget = (widget) => {
    setEditWidgetData(widget);
    setIsEditDialogOpen(true);
  };

  // Functions to handle CWPP Widgets
  const handleAddCWPPWidget = () => {
    setDynamicCWPPWidgets([
      ...dynamicCWPPWidgets,
      { id: Date.now(), name: "New CWPP Widget", data: cloudRiskData }
    ]);
  };

  const handleRemoveCWPPWidget = (id) => {
    setDynamicCWPPWidgets(dynamicCWPPWidgets.filter(widget => widget.id !== id));
  };

  const handleEditCWPPWidget = (widget) => {
    setEditWidgetData(widget);
    setIsEditDialogOpen(true);
  };

  // Functions to handle Registry Scan Widgets
  const handleAddRegistryWidget = () => {
    setDynamicRegistryWidgets([
      ...dynamicRegistryWidgets,
      { id: Date.now(), name: "New Registry Widget", data: cloudRiskData }
    ]);
  };

  const handleRemoveRegistryWidget = (id) => {
    setDynamicRegistryWidgets(dynamicRegistryWidgets.filter(widget => widget.id !== id));
  };

  const handleEditRegistryWidget = (widget) => {
    setEditWidgetData(widget);
    setIsEditDialogOpen(true);
  };

  const handleSaveEdit = () => {
    // Save edits for the appropriate section
    setDynamicCSPMWidgets(dynamicCSPMWidgets.map(widget => widget.id === editWidgetData.id ? editWidgetData : widget));
    setDynamicCWPPWidgets(dynamicCWPPWidgets.map(widget => widget.id === editWidgetData.id ? editWidgetData : widget));
    setDynamicRegistryWidgets(dynamicRegistryWidgets.map(widget => widget.id === editWidgetData.id ? editWidgetData : widget));
    setIsEditDialogOpen(false);
  };

  return (
    <div className="dashboard">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">CNAPP Dashboard</Typography>
        </Grid>

        {/* CSPM Executive Dashboard */}
        <Grid item xs={12}>
          <Typography variant="h6">CSPM Executive Dashboard</Typography>
        </Grid>

        {/* Cloud Accounts Widget */}
        <Grid item xs={4}>
          <Box className="widget">
            <Typography variant="subtitle1">Cloud Accounts</Typography>
            <Doughnut data={cloudAccountsData} />
            <Typography variant="body2">Connected (2)</Typography>
            <Typography variant="body2">Not Connected (2)</Typography>
          </Box>
        </Grid>

        {/* Cloud Account Risk Assessment Widget */}
        <Grid item xs={4}>
          <Box className="widget">
            <Typography variant="subtitle1">Cloud Account Risk Assessment</Typography>
            <Pie data={cloudRiskData} />
            <Typography variant="body2">Failed (988)</Typography>
            <Typography variant="body2">Warning (98)</Typography>
            <Typography variant="body2">Not Calculable (24)</Typography>
            <Typography variant="body2">Passed (7252)</Typography>
          </Box>
        </Grid>

        {/* Empty Widget Slot for CSPM */}
        <Grid item xs={4}>
          <Box className="widget add-widget">
            <Button variant="outlined" onClick={handleAddCSPMWidget}>+ Add Widget</Button>
          </Box>
        </Grid>

        {/* Render Dynamic CSPM Widgets */}
        {dynamicCSPMWidgets.map(widget => (
          <Grid item xs={4} key={widget.id}>
            <Box className="widget">
              <Typography variant="subtitle1">{widget.name}</Typography>
              <Doughnut data={widget.data} />
              <IconButton onClick={() => handleEditCSPMWidget(widget)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => handleRemoveCSPMWidget(widget.id)}>
                <Delete />
              </IconButton>
            </Box>
          </Grid>
        ))}

        {/* CWPP Dashboard */}
        <Grid item xs={12}>
          <Typography variant="h6">CWPP Dashboard</Typography>
        </Grid>

        {/* Top 5 Namespace Specific Alerts */}
        <Grid item xs={4}>
          <Box className="widget">
            <Typography variant="subtitle1">Top 5 Namespace Specific Alerts</Typography>
            <Bar data={namespaceSpecificAlertsData} />
          </Box>
        </Grid>

        {/* Workload Alerts */}
        <Grid item xs={4}>
          <Box className="widget">
            <Typography variant="subtitle1">Workload Alerts</Typography>
            <Bar data={workloadAlertsData} />
          </Box>
        </Grid>

        {/* Empty Widget Slot for CWPP */}
        <Grid item xs={4}>
          <Box className="widget add-widget">
            <Button variant="outlined" onClick={handleAddCWPPWidget}>+ Add Widget</Button>
          </Box>
        </Grid>

        {/* Render Dynamic CWPP Widgets */}
        {dynamicCWPPWidgets.map(widget => (
          <Grid item xs={4} key={widget.id}>
            <Box className="widget">
              <Typography variant="subtitle1">{widget.name}</Typography>
              <Bar data={widget.data} />
              <IconButton onClick={() => handleEditCWPPWidget(widget)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => handleRemoveCWPPWidget(widget.id)}>
                <Delete />
              </IconButton>
            </Box>
          </Grid>
        ))}

        {/* Registry Scan Dashboard */}
        <Grid item xs={12}>
          <Typography variant="h6">Registry Scan</Typography>
        </Grid>

        {/* Image Risk Assessment */}
        <Grid item xs={4}>
          <Box className="widget">
            <Typography variant="subtitle1">Image Risk Assessment</Typography>
            <Pie data={imageRiskAssessmentData} />
            <Typography variant="body2">Critical (12)</Typography>
            <Typography variant="body2">High (50)</Typography>
            <Typography variant="body2">Medium (30)</Typography>
          </Box>
        </Grid>

        {/* Image Security Issues */}
        <Grid item xs={4}>
          <Box className="widget">
            <Typography variant="subtitle1">Image Security Issues</Typography>
            <Pie data={imageSecurityIssuesData} />
            <Typography variant="body2">Critical (8)</Typography>
            <Typography variant="body2">High (20)</Typography>
            <Typography variant="body2">Medium (40)</Typography>
          </Box>
        </Grid>

        {/* Empty Widget Slot for Registry Scan */}
        <Grid item xs={4}>
          <Box className="widget add-widget">
            <Button variant="outlined" onClick={handleAddRegistryWidget}>+ Add Widget</Button>
          </Box>
        </Grid>

        {/* Render Dynamic Registry Scan Widgets */}
        {dynamicRegistryWidgets.map(widget => (
          <Grid item xs={4} key={widget.id}>
            <Box className="widget">
              <Typography variant="subtitle1">{widget.name}</Typography>
              <Pie data={widget.data} />
              <IconButton onClick={() => handleEditRegistryWidget(widget)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => handleRemoveRegistryWidget(widget.id)}>
                <Delete />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Edit Widget Dialog */}
      <Dialog open={isEditDialogOpen} onClose={() => setIsEditDialogOpen(false)}>
        <DialogTitle>Edit Widget</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Widget Name"
            fullWidth
            variant="standard"
            value={editWidgetData?.name || ''}
            onChange={(e) => setEditWidgetData({ ...editWidgetData, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Data (comma-separated values)"
            fullWidth
            variant="standard"
            value={editWidgetData?.data.datasets[0].data.join(', ') || ''}
            onChange={(e) => {
              const newData = e.target.value.split(',').map(Number);
              setEditWidgetData({
                ...editWidgetData,
                data: {
                  ...editWidgetData.data,
                  datasets: [{
                    ...editWidgetData.data.datasets[0],
                    data: newData
                  }]
                }
              });
            }}
          />
          <TextField
            margin="dense"
            label="Colors (comma-separated hex codes)"
            fullWidth
            variant="standard"
            value={editWidgetData?.data.datasets[0].backgroundColor.join(', ') || ''}
            onChange={(e) => {
              const newColors = e.target.value.split(',').map(color => color.trim());
              setEditWidgetData({
                ...editWidgetData,
                data: {
                  ...editWidgetData.data,
                  datasets: [{
                    ...editWidgetData.data.datasets[0],
                    backgroundColor: newColors
                  }]
                }
              });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleSaveEdit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dashboard;
