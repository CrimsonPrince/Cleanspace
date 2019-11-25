import cf2cdm
import xarray as xr
import cfgrib

print(cfgrib.open_datasets('test.grib2'))