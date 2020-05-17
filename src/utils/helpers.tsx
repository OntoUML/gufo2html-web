export const calcDistance = (
  p1: google.maps.LatLng,
  p2: google.maps.LatLng
) => {
  return google.maps.geometry.spherical.computeDistanceBetween(p1, p2)
}

export const validateEmail = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(email)
}

export const sortLocations = (
  userLocation: IMapLocation | null,
  locations: ILocation[]
): ILocation[] => {
  if (userLocation) {
    const {
      coordinates: { lat, lng },
    } = userLocation

    if (lat && lng) {
      const p1 = new google.maps.LatLng(lat, lng)

      return [...locations].sort((l1: ILocation, l2: ILocation) => {
        const l1Positon = new google.maps.LatLng(
          l1.coordinates.lat,
          l1.coordinates.lng
        )
        const l2Position = new google.maps.LatLng(
          l2.coordinates.lat,
          l2.coordinates.lng
        )
        const l1Distance = calcDistance(p1, l1Positon)
        const l2Distance = calcDistance(p1, l2Position)

        return l1Distance > l2Distance ? 1 : -1
      })
    }
  }

  return locations
}
