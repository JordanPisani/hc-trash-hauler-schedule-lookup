import { featureLayerProps, queryFeatures } from '@hcflgov/vue-esri-search'

export const watchResults = async (
  results: __esri.SearchResult[] | undefined
) => {
  try {
    if (!results) throw 'No Search Results'
    const [firstResult] = results

    /**
     * provider
     */
    featureLayerProps.url =
      'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/SW_FACILITIES/MapServer/1'
    console.log('provider:', await queryFeatures(firstResult?.extent))

    /**
     * schedules
     */
    const scheduleEndpoint =
      'https://maps.hillsboroughcounty.org/arcgis/rest/services/SolidWaste_Viewer/SolidWasteRouteSchedules/MapServer'

    // trash schedule
    featureLayerProps.url = `${scheduleEndpoint}/2`
    console.log('trash:', await queryFeatures(firstResult?.extent))

    // recycle schedule
    featureLayerProps.url = `${scheduleEndpoint}/1`
    console.log('recycle:', await queryFeatures(firstResult?.extent))

    // yard schedule
    featureLayerProps.url = `${scheduleEndpoint}/0`
    console.log('yard:', await queryFeatures(firstResult?.extent))
  } catch (error) {
    console.warn(error)
  }
}
