/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Pesquisa from "layouts/pesquisa/barra";
// import DataTable from "examples/Tables/DataTable";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards - Copia/ComplexStatisticsCard";
import MDTypography from "components/MDTypography";
import "./index.css";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            {/* parte feita pelo francisco */}
            <div>
              <Pesquisa />
            </div>
            <div>
              <MDTypography variant="button" fontWeight="light" color="text">
                <h1 className="espaco">Santarém Unidade Tapajós Rua Vera Paz, s/n Bairro Salé</h1>
              </MDTypography>
            </div>
            <Card>
              <MDTypography variant="button" fontWeight="light" color="text">
                <h2 className="espaco">8:00 às 8:50</h2>
                <Divider />
              </MDTypography>
              <MDBox py={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="secondary"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="secondary"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="secondary"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="secondary"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            {/* parte feita pelo francisco */}
            <Card>
              <MDTypography variant="button" fontWeight="light" color="text">
                <h2 className="espaco">8:50 às 9:40</h2>
                <Divider />
              </MDTypography>
              <MDBox py={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="secondary"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="secondary"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="secondary"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            {/* parte feita pelo francisco */}
            <Card>
              <MDTypography variant="button" fontWeight="light" color="text">
                <h2 className="espaco">9:40 às 10:30</h2>
                <Divider />
              </MDTypography>
              <MDBox py={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="secondary"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="secondary"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="secondary"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="secondary"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="secondary"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="secondary"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="info"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <MDBox mb={1.5}>
                      <ComplexStatisticsCard
                        color="secondary"
                        icon="person"
                        title="Espaço"
                        count="001"
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "Santerém - Bloco Modular Tapajós I",
                        }}
                      />
                    </MDBox>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
