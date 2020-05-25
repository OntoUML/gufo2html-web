export default `
@prefix : <https://alpinebits.org#>.
@prefix gufo: <http://purl.org/nemo/gufo#>.
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix owl: <http://www.w3.org/2002/07/owl#>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.

<https://alpinebits.org> rdf:type owl:Ontology;
    owl:imports gufo:.
[ rdf:type owl:AllDisjointClasses ] owl:members (:Organization :Person :Trail :Lift :MountainArea :AudioObject :VideoObject :ImageObject :SnowparkFeature :EventSeries).
[ rdf:type owl:AllDisjointClasses ] owl:members (:Organization :Person).
:organizer rdf:type owl:ObjectProperty;
    rdfs:domain :EventPlan;
    rdfs:range :Organizer;
    rdfs:comment "Relation URI was automatically generated.".
:EventPlan rdfs:subClassOf [
  rdf:type owl:Restriction;
  owl:onProperty :organizer;
  owl:someValuesFrom :Organizer
].
:Organizer rdfs:subClassOf [
  rdf:type owl:Restriction;
  owl:onProperty [ owl:inverseOf :organizer ];
  owl:someValuesFrom :EventPlan
].
:organizer rdfs:subPropertyOf gufo:mediates.
:Boolean rdfs:label "boolean".
:Agent owl:equivalentClass [
  rdf:type owl:Class;
  owl:unionOf (:Organization :Person)
].
[ rdf:type owl:AllDisjointClasses ] owl:members (:AudioObject :ImageObject :VideoObject).
[ rdf:type owl:AllDisjointClasses ] owl:members (:Cancelled :Published).
:EventPlan owl:equivalentClass [
  rdf:type owl:Class;
  owl:unionOf (:Cancelled :Published)
].
[ rdf:type owl:AllDisjointClasses ] owl:members (:CompositeEvent :SimpleEvent).
:Byte rdfs:label "byte".
:EventPlan owl:equivalentClass [
  rdf:type owl:Class;
  owl:unionOf (:CompositeEvent :SimpleEvent)
].
[ rdf:type owl:AllDisjointClasses ] owl:members (:Closed :Open :PermanentlyClosed).
:sponsor rdf:type owl:ObjectProperty;
    rdfs:domain :EventPlan;
    rdfs:range :Sponsor;
    rdfs:comment "Relation URI was automatically generated.";
    rdf:type gufo:MaterialRelationshipType.
:Place owl:equivalentClass [
  rdf:type owl:Class;
  owl:unionOf (:Closed :Open :PermanentlyClosed)
].
[ rdf:type owl:AllDisjointClasses ] owl:members (:LineString :MultiLineString :Multipoint :Multipolygon :Point :Polygon).
[ rdf:type owl:AllDisjointClasses ] owl:members (:EventPlan :SnowMeasurement).
:Geometry owl:equivalentClass [
  rdf:type owl:Class;
  owl:unionOf (:LineString :MultiLineString :Multipoint :Multipolygon :Point :Polygon)
].
:Char rdfs:label "char".
[ rdf:type owl:AllDisjointClasses ] owl:members (:SkiSlope :Snowpark).
[ rdf:type owl:AllDisjointClasses ] owl:members (:Lift :MountainArea :Trail).
[ rdf:type owl:AllDisjointClasses ] owl:members (:CompositeArea :Simplearea).
:MountainArea owl:equivalentClass [
  rdf:type owl:Class;
  owl:unionOf (:CompositeArea :Simplearea)
].
:superevent rdf:type owl:ObjectProperty;
    rdfs:domain :EventPlan;
    rdfs:range :CompositeEvent;
    rdfs:subPropertyOf gufo:isProperPartOf;
    rdfs:comment "Relation URI was automatically generated.".
:CompositeEvent rdfs:subClassOf [
  rdf:type owl:Restriction;
  owl:onProperty [ owl:inverseOf :superevent ];
  owl:minQualifiedCardinality "2"^^xsd:nonNegativeInteger;
  owl:onClass :EventPlan
].
[ rdf:type owl:AllDisjointClasses ] owl:members (:Ongoing :Realized :Rescheduled :Scheduled).
:Double rdfs:label "double".
:Published owl:equivalentClass [
  rdf:type owl:Class;
  owl:unionOf (:Ongoing :Realized :Rescheduled :Scheduled)
].
[ rdf:type owl:AllDisjointClasses ] owl:members (:Geometry :Difficulty).
[ rdf:type owl:AllDisjointClasses ] owl:members (:Organization :Person).
:Agent owl:equivalentClass [
  rdf:type owl:Class;
  owl:unionOf (:Organization :Person)
].
[ rdf:type owl:AllDisjointClasses ] owl:members (:AudioObject :ImageObject :VideoObject).
[ rdf:type owl:AllDisjointClasses ] owl:members (:Cancelled :Published).
:Float rdfs:label "float".
:EventPlan owl:equivalentClass [
  rdf:type owl:Class;
  owl:unionOf (:Cancelled :Published)
].
:contributor rdf:type owl:ObjectProperty;
    rdfs:domain :EventPlan;
    rdfs:range :Contributor;
    rdfs:comment "Relation URI was automatically generated.";
    rdf:type gufo:MaterialRelationshipType.
[ rdf:type owl:AllDisjointClasses ] owl:members (:CompositeEvent :SimpleEvent).
:EventPlan owl:equivalentClass [
  rdf:type owl:Class;
  owl:unionOf (:CompositeEvent :SimpleEvent)
].
[ rdf:type owl:AllDisjointClasses ] owl:members (:Closed :Open :PermanentlyClosed).
:Place owl:equivalentClass [
  rdf:type owl:Class;
  owl:unionOf (:Closed :Open :PermanentlyClosed)
].
:Int rdfs:label "int".
[ rdf:type owl:AllDisjointClasses ] owl:members (:LineString :MultiLineString :Multipoint :Multipolygon :Point :Polygon).
:Geometry owl:equivalentClass [
  rdf:type owl:Class;
  owl:unionOf (:LineString :MultiLineString :Multipoint :Multipolygon :Point :Polygon)
].
[ rdf:type owl:AllDisjointClasses ] owl:members (:SkiSlope :Snowpark).
:publisher rdf:type owl:ObjectProperty;
    rdfs:domain :EventPlan;
    rdfs:range :Publisher;
    rdfs:comment "Relation URI was automatically generated.";
    rdf:type gufo:MaterialRelationshipType.
[ rdf:type owl:AllDisjointClasses ] owl:members (:Lift :MountainArea :Trail).
[ rdf:type owl:AllDisjointClasses ] owl:members (:CompositeArea :Simplearea).
:Long rdfs:label "long".
:MountainArea owl:equivalentClass [
  rdf:type owl:Class;
  owl:unionOf (:CompositeArea :Simplearea)
].
[ rdf:type owl:AllDisjointClasses ] owl:members (:Ongoing :Realized :Rescheduled :Scheduled).
:Published owl:equivalentClass [
  rdf:type owl:Class;
  owl:unionOf (:Ongoing :Realized :Rescheduled :Scheduled)
].
:depicted rdf:type owl:ObjectProperty;
    rdfs:domain :MediaObject;
    rdfs:range :NamedIndividual;
    rdfs:comment "Relation URI was automatically generated.";
    rdfs:subPropertyOf gufo:historicallyDependsOn.
:Short rdfs:label "short".
:Void rdfs:label "void".
:venue rdf:type owl:ObjectProperty;
    rdfs:domain :EventPlan;
    rdfs:range :Venue;
    rdfs:comment "Relation URI was automatically generated.";
    rdf:type gufo:MaterialRelationshipType.
:String rdfs:label "string".
:eventseries rdf:type owl:ObjectProperty;
    rdfs:domain :EventPlan;
    rdfs:range :EventSeries;
    rdfs:comment "Relation URI was automatically generated.".
:EventPlan rdfs:subClassOf [
  rdf:type owl:Restriction;
  owl:onProperty :eventseries;
  owl:maxQualifiedCardinality "1"^^xsd:nonNegativeInteger;
  owl:onClass :EventSeries
].
:eventseries rdfs:subPropertyOf gufo:mediates.
:AreaOwner rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Agent;
    rdf:type gufo:RoleMixin;
    rdfs:label "Area Owner".
:snowparkcontainer rdf:type owl:ObjectProperty;
    rdfs:domain :SnowparkFeature;
    rdfs:range :Snowpark;
    rdfs:comment "Relation URI was automatically generated.".
:SnowparkFeature rdfs:subClassOf [
  rdf:type owl:Restriction;
  owl:onProperty :snowparkcontainer;
  owl:qualifiedCardinality "1"^^xsd:nonNegativeInteger;
  owl:onClass :Snowpark
].
:snowparkcontainer rdfs:subPropertyOf gufo:isComponentOf.
:CopyrightOwner rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Agent;
    rdf:type gufo:RoleMixin;
    rdfs:label "Copyright Owner".
:containerarea rdf:type owl:ObjectProperty;
    rdfs:domain :Lift;
    rdfs:range :MountainArea;
    rdfs:subPropertyOf gufo:isObjectProperPartOf;
    rdfs:comment "Relation URI was automatically generated.".
:Lift rdfs:subClassOf [
  rdf:type owl:Restriction;
  owl:onProperty :containerarea;
  owl:someValuesFrom :MountainArea
].
:MountainArea rdfs:subClassOf [
  rdf:type owl:Restriction;
  owl:onProperty [ owl:inverseOf :containerarea ];
  owl:someValuesFrom :Lift
].
:containerarea rdfs:subPropertyOf gufo:isComponentOf.
:Contributor rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Agent;
    rdf:type gufo:RoleMixin;
    rdfs:label "Contributor".
:containerarea_3x40WRaGAqCsIB4W rdf:type owl:ObjectProperty;
    rdfs:domain :Trail;
    rdfs:range :MountainArea;
    rdfs:subPropertyOf gufo:isObjectProperPartOf;
    rdfs:comment "Relation URI was automatically generated.".
:Trail rdfs:subClassOf [
  rdf:type owl:Restriction;
  owl:onProperty :containerarea_3x40WRaGAqCsIB4W;
  owl:someValuesFrom :MountainArea
].
:MountainArea rdfs:subClassOf [
  rdf:type owl:Restriction;
  owl:onProperty [ owl:inverseOf :containerarea_3x40WRaGAqCsIB4W ];
  owl:someValuesFrom :Trail
].
:containerarea_3x40WRaGAqCsIB4W rdfs:subPropertyOf gufo:isComponentOf.
:Publisher rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Agent;
    rdf:type gufo:RoleMixin;
    rdfs:label "Publisher".
:LiftType gufo:categorizes :Lift.
:Sponsor rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Agent;
    rdf:type gufo:RoleMixin;
    rdfs:label "Sponsor".
:TrailType gufo:categorizes :Trail.
:Organizer rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Agent;
    rdf:type gufo:RoleMixin;
    rdfs:label "Organizer".
:SnowparkFeatureType gufo:categorizes :SnowparkFeature.
:Organization rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Agent;
    rdf:type gufo:Kind;
    rdfs:label "Organization".
:measurementauthor rdf:type owl:ObjectProperty;
    rdfs:domain :SnowMeasurement;
    rdfs:range :Agent;
    rdfs:comment "Relation URI was automatically generated.".
:SnowMeasurement rdfs:subClassOf [
  rdf:type owl:Restriction;
  owl:onProperty :measurementauthor;
  owl:qualifiedCardinality "1"^^xsd:nonNegativeInteger;
  owl:onClass :Agent
].
:measurementauthor rdfs:subPropertyOf gufo:mediates.
:Person rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Agent;
    rdf:type gufo:Kind;
    rdfs:label "Person".
:measurementplace rdf:type owl:ObjectProperty;
    rdfs:domain :SnowMeasurement;
    rdfs:range :Place;
    rdfs:comment "Relation URI was automatically generated.".
:SnowMeasurement rdfs:subClassOf [
  rdf:type owl:Restriction;
  owl:onProperty :measurementplace;
  owl:someValuesFrom :Place
].
:measurementplace rdfs:subPropertyOf gufo:mediates.
:Agent rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :NamedIndividual, gufo:FunctionalComplex;
    rdf:type gufo:Category.
:contactPoints rdfs:label "contactPoints".
:secondarysurface rdf:type owl:ObjectProperty;
    rdfs:domain :SnowMeasurement;
    rdfs:range :Snow;
    rdfs:comment "Relation URI was automatically generated.".
:SnowMeasurement rdfs:subClassOf [
  rdf:type owl:Restriction;
  owl:onProperty :secondarysurface;
  owl:qualifiedCardinality "1"^^xsd:nonNegativeInteger;
  owl:onClass :Snow
].
:secondarysurface rdfs:subPropertyOf gufo:mediates.
:contactPoints rdf:type owl:ObjectProperty;
    rdfs:domain :Agent;
    rdfs:range :ContactPoint;
    rdfs:subPropertyOf gufo:hasReifiedQualityValue.
:Agent rdfs:label "Agent".
:primarysurface rdf:type owl:ObjectProperty;
    rdfs:domain :SnowMeasurement;
    rdfs:range :Snow;
    rdfs:comment "Relation URI was automatically generated.".
:SnowMeasurement rdfs:subClassOf [
  rdf:type owl:Restriction;
  owl:onProperty :primarysurface;
  owl:qualifiedCardinality "1"^^xsd:nonNegativeInteger;
  owl:onClass :Snow
].
:primarysurface rdfs:subPropertyOf gufo:mediates.
:Place rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :GeospatialFeature, :NamedIndividual, gufo:FunctionalComplex;
    rdf:type gufo:Category.
:superarea rdf:type owl:ObjectProperty;
    rdfs:domain :MountainArea;
    rdfs:range :CompositeArea;
    rdfs:comment "Relation URI was automatically generated.".
:MountainArea rdfs:subClassOf [
  rdf:type owl:Restriction;
  owl:onProperty :superarea;
  owl:maxQualifiedCardinality "1"^^xsd:nonNegativeInteger;
  owl:onClass :CompositeArea
].
:CompositeArea rdfs:subClassOf [
  rdf:type owl:Restriction;
  owl:onProperty [ owl:inverseOf :superarea ];
  owl:minQualifiedCardinality "2"^^xsd:nonNegativeInteger;
  owl:onClass :MountainArea
].
:superarea rdfs:subPropertyOf gufo:isComponentOf.
:openingHours rdfs:label "openingHours".
:address rdfs:label "address".
:connectedto rdf:type owl:ObjectProperty;
    rdfs:domain :Place;
    rdfs:range :Place;
    rdfs:comment "Relation URI was automatically generated.";
    rdf:type gufo:MaterialRelationshipType.
:howToArrive rdfs:label "howToArrive".
:openingHours rdf:type owl:ObjectProperty;
    rdfs:domain :Place;
    rdfs:range :HoursSpecification;
    rdfs:subPropertyOf gufo:hasReifiedQualityValue.
:address rdf:type owl:ObjectProperty;
    rdfs:domain :Place;
    rdfs:range :Address;
    rdfs:subPropertyOf gufo:hasReifiedQualityValue.
:howToArrive rdf:type owl:DatatypeProperty;
    rdfs:domain :Place;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:string.
:areaowner rdf:type owl:ObjectProperty;
    rdfs:domain :MountainArea;
    rdfs:range :AreaOwner;
    rdfs:comment "Relation URI was automatically generated.";
    rdf:type gufo:MaterialRelationshipType.
:Place rdfs:label "Place".
:Rescheduled rdf:type owl:Class, owl:NamedIndividual.
:MediaObjectType gufo:categorizes :MediaObject.
:Rescheduled rdfs:subClassOf :Published;
    rdf:type gufo:Phase;
    rdfs:label "Rescheduled".
:CompositeEvent rdf:type owl:Class, owl:NamedIndividual.
:feature rdf:type owl:ObjectProperty;
    rdfs:domain :Geometry;
    rdfs:range :GeospatialFeature;
    rdfs:comment "Relation URI was automatically generated.".
:Geometry rdfs:subClassOf [
  rdf:type owl:Restriction;
  owl:onProperty :feature;
  owl:qualifiedCardinality "1"^^xsd:nonNegativeInteger;
  owl:onClass :GeospatialFeature
].
:GeospatialFeature rdfs:subClassOf [
  rdf:type owl:Restriction;
  owl:onProperty [ owl:inverseOf :feature ];
  owl:someValuesFrom :Geometry
].
:feature rdfs:subPropertyOf gufo:inheresIn.
:CompositeEvent rdfs:subClassOf :EventPlan;
    rdf:type gufo:SubKind;
    rdfs:label "Composite Event".
:SimpleEvent rdf:type owl:Class, owl:NamedIndividual.
:license rdf:type owl:ObjectProperty;
    rdfs:domain :MediaObject;
    rdfs:range :LicenseType;
    rdfs:comment "Relation URI was automatically generated.";
    rdf:type gufo:MaterialRelationshipType.
:SimpleEvent rdfs:subClassOf :EventPlan;
    rdf:type gufo:SubKind;
    rdfs:label "Simple Event".
:Cancelled rdf:type owl:Class, owl:NamedIndividual.
:copyrightowner rdf:type owl:ObjectProperty;
    rdfs:domain :MediaObject;
    rdfs:range :CopyrightOwner;
    rdfs:comment "Relation URI was automatically generated.";
    rdf:type gufo:MaterialRelationshipType.
:Cancelled rdfs:subClassOf :EventPlan;
    rdf:type gufo:Phase;
    rdfs:label "Cancelled".
:Realized rdf:type owl:Class, owl:NamedIndividual.
:MountainAreaType gufo:categorizes :MountainArea.
:Realized rdfs:subClassOf :Published;
    rdf:type gufo:Phase;
    rdfs:label "Realized".
:Ongoing rdf:type owl:Class, owl:NamedIndividual.
:assessedtrail rdf:type owl:ObjectProperty;
    rdfs:domain :Difficulty;
    rdfs:range :Trail;
    rdfs:comment "Relation URI was automatically generated.".
:Difficulty rdfs:subClassOf [
  rdf:type owl:Restriction;
  owl:onProperty :assessedtrail;
  owl:qualifiedCardinality "1"^^xsd:nonNegativeInteger;
  owl:onClass :Trail
].
:Trail rdfs:subClassOf [
  rdf:type owl:Restriction;
  owl:onProperty [ owl:inverseOf :assessedtrail ];
  owl:qualifiedCardinality "1"^^xsd:nonNegativeInteger;
  owl:onClass :Difficulty
].
:assessedtrail rdfs:subPropertyOf gufo:inheresIn.
:Ongoing rdfs:subClassOf :Published;
    rdf:type gufo:Phase;
    rdfs:label "Ongoing".
:Scheduled rdf:type owl:Class, owl:NamedIndividual.
:EventType gufo:categorizes :EventPlan.
:Scheduled rdfs:subClassOf :Published;
    rdf:type gufo:Phase;
    rdfs:label "Scheduled".
:EventPlan rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :NamedIndividual, gufo:Relator;
    rdf:type gufo:Kind.
:endDate rdfs:label "endDate".
:startDate rdfs:label "startDate".
:capacity rdfs:label "capacity".
:endDate rdf:type owl:DatatypeProperty;
    rdfs:domain :EventPlan;
    rdfs:subPropertyOf gufo:hasQualityValue.
:startDate rdf:type owl:DatatypeProperty;
    rdfs:domain :EventPlan;
    rdfs:subPropertyOf gufo:hasQualityValue.
:capacity rdf:type owl:DatatypeProperty;
    rdfs:domain :EventPlan;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:int.
:EventPlan rdfs:label "Event Plan".
:ContactPoint rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:QualityValue.
:telephone rdfs:label "telephone".
:availableHours rdfs:label "availableHours".
:email rdfs:label "email".
:address_n8DOg6AUB20tyfy rdfs:label "address".
:telephone rdf:type owl:DatatypeProperty;
    rdfs:domain :ContactPoint;
    rdfs:range xsd:string.
:availableHours rdf:type owl:ObjectProperty;
    rdfs:domain :ContactPoint;
    rdfs:range :HoursSpecification.
:email rdf:type owl:DatatypeProperty;
    rdfs:domain :ContactPoint;
    rdfs:range xsd:string.
:address_n8DOg6AUB20tyfy rdf:type owl:ObjectProperty;
    rdfs:domain :ContactPoint;
    rdfs:range :Address.
:ContactPoint rdfs:label "Contact Point".
:NamedIndividual rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:ConcreteIndividual;
    rdf:type gufo:Category.
:description rdfs:label "description".
:name rdfs:label "name".
:abstract rdfs:label "abstract".
:shortName rdfs:label "shortName".
:url rdfs:label "url".
:description rdf:type owl:DatatypeProperty;
    rdfs:domain :NamedIndividual;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:string.
:name rdf:type owl:DatatypeProperty;
    rdfs:domain :NamedIndividual;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:string.
:abstract rdf:type owl:DatatypeProperty;
    rdfs:domain :NamedIndividual;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:string.
:shortName rdf:type owl:DatatypeProperty;
    rdfs:domain :NamedIndividual;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:string.
:url rdf:type owl:DatatypeProperty;
    rdfs:domain :NamedIndividual;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:string.
:NamedIndividual rdfs:label "Named Individual".
:TimeInstant rdfs:subClassOf gufo:QualityValue;
    rdfs:label "Time Instant".
:Simplearea rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :MountainArea;
    rdf:type gufo:SubKind;
    rdfs:label "SimpleArea".
:CompositeArea rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :MountainArea;
    rdf:type gufo:SubKind;
    rdfs:label "Composite Area".
:Snowpark rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Trail;
    rdf:type gufo:SubKind;
    rdfs:label "Snowpark".
:Trail rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Place;
    rdf:type gufo:Kind;
    rdfs:label "Trail".
:GeospatialFeature rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:Endurant;
    rdf:type gufo:Category.
:length rdfs:label "length".
:area rdfs:label "area".
:maxAltitude rdfs:label "maxAltitude".
:minAltitude rdfs:label "minAltitude".
:length rdf:type owl:DatatypeProperty;
    rdfs:domain :GeospatialFeature;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:int.
:area rdf:type owl:DatatypeProperty;
    rdfs:domain :GeospatialFeature;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:int.
:maxAltitude rdf:type owl:DatatypeProperty;
    rdfs:domain :GeospatialFeature;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:int.
:minAltitude rdf:type owl:DatatypeProperty;
    rdfs:domain :GeospatialFeature;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:int.
:GeospatialFeature rdfs:label "Geospatial Feature".
:PermanentlyClosed rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Place;
    rdf:type gufo:PhaseMixin;
    rdfs:label "Permanently Closed".
:Closed rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Place;
    rdf:type gufo:PhaseMixin;
    rdfs:label "Closed".
:Open rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Place;
    rdf:type gufo:PhaseMixin;
    rdfs:label "Open".
:Lift rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Place;
    rdf:type gufo:Kind.
:capacity_zoRKWRaGAqCsICo3 rdfs:label "capacity".
:personsPerChair rdfs:label "personsPerChair".
:capacity_zoRKWRaGAqCsICo3 rdf:type owl:DatatypeProperty;
    rdfs:domain :Lift;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:int.
:personsPerChair rdf:type owl:DatatypeProperty;
    rdfs:domain :Lift;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:int.
:Lift rdfs:label "Lift".
:MountainArea rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Place;
    rdf:type gufo:Kind;
    rdfs:label "Mountain Area".
:Venue rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Place;
    rdf:type gufo:RoleMixin;
    rdfs:label "Venue".
:Address rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:QualityValue.
:street rdfs:label "street".
:city rdfs:label "city".
:region rdfs:label "region".
:country rdfs:label "country".
:category_Urhhg6AUB20ty7Y rdfs:label "category".
:zipcode rdfs:label "zipcode".
:complement rdfs:label "complement".
:street rdf:type owl:DatatypeProperty;
    rdfs:domain :Address;
    rdfs:range xsd:string.
:city rdf:type owl:DatatypeProperty;
    rdfs:domain :Address;
    rdfs:range xsd:string.
:region rdf:type owl:DatatypeProperty;
    rdfs:domain :Address;
    rdfs:range xsd:string.
:country rdf:type owl:DatatypeProperty;
    rdfs:domain :Address;
    rdfs:range xsd:string.
:category_Urhhg6AUB20ty7Y rdf:type owl:DatatypeProperty;
    rdfs:domain :Address;
    rdfs:range xsd:string.
:zipcode rdf:type owl:DatatypeProperty;
    rdfs:domain :Address;
    rdfs:range xsd:string.
:complement rdf:type owl:DatatypeProperty;
    rdfs:domain :Address;
    rdfs:range xsd:string.
:Address rdfs:label "Address".
:AudioObject rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :MediaObject;
    rdf:type gufo:Kind.
:duration rdfs:label "duration";
    rdf:type owl:DatatypeProperty;
    rdfs:domain :AudioObject;
    rdfs:subPropertyOf gufo:hasQualityValue.
:AudioObject rdfs:label "Audio Object".
:VideoObject rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :MediaObject;
    rdf:type gufo:Kind.
:duration_v78mg6AUB20tyVP rdfs:label "duration".
:width rdfs:label "width".
:height rdfs:label "height".
:duration_v78mg6AUB20tyVP rdf:type owl:DatatypeProperty;
    rdfs:domain :VideoObject;
    rdfs:subPropertyOf gufo:hasQualityValue.
:width rdf:type owl:DatatypeProperty;
    rdfs:domain :VideoObject;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:int.
:height rdf:type owl:DatatypeProperty;
    rdfs:domain :VideoObject;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:int.
:VideoObject rdfs:label "Video Object".
:ImageObject rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :MediaObject;
    rdf:type gufo:Kind.
:width_gp62MFaAUB22dhlz rdfs:label "width".
:height_BTa2MFaAUB22dhlw rdfs:label "height".
:width_gp62MFaAUB22dhlz rdf:type owl:DatatypeProperty;
    rdfs:domain :ImageObject;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:int.
:height_BTa2MFaAUB22dhlw rdf:type owl:DatatypeProperty;
    rdfs:domain :ImageObject;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:int.
:ImageObject rdfs:label "Image Object".
:MediaObject rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :NamedIndividual, gufo:FunctionalComplex;
    rdf:type gufo:Category.
:contentType rdfs:label "contentType";
    rdf:type owl:DatatypeProperty;
    rdfs:domain :MediaObject;
    rdfs:subPropertyOf gufo:hasQualityValue.
:MediaObject rdfs:label "Media Object".
:SkiSlope rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Trail;
    rdf:type gufo:SubKind;
    rdfs:label "Ski Slope".
:SnowMeasurement rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :GeospatialFeature, gufo:Relator;
    rdf:type gufo:Kind.
:snowOverNight rdfs:label "snowOverNight".
:snowMaking rdfs:label "snowMaking".
:stormTotal rdfs:label "stormTotal".
:obtainedIn rdfs:label "obtainedIn".
:baseSnow rdfs:label "baseSnow".
:groomed rdfs:label "groomed".
:baseSnowRange rdfs:label "baseSnowRange".
:snowOverNight rdf:type owl:DatatypeProperty;
    rdfs:domain :SnowMeasurement;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:int.
:snowMaking rdf:type owl:DatatypeProperty;
    rdfs:domain :SnowMeasurement;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:boolean.
:stormTotal rdf:type owl:DatatypeProperty;
    rdfs:domain :SnowMeasurement;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:int.
:obtainedIn rdf:type owl:DatatypeProperty;
    rdfs:domain :SnowMeasurement;
    rdfs:subPropertyOf gufo:hasQualityValue.
:baseSnow rdf:type owl:DatatypeProperty;
    rdfs:domain :SnowMeasurement;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:int.
:groomed rdf:type owl:DatatypeProperty;
    rdfs:domain :SnowMeasurement;
    rdfs:subPropertyOf gufo:hasQualityValue;
    rdfs:range xsd:boolean.
:baseSnowRange rdf:type owl:DatatypeProperty;
    rdfs:domain :SnowMeasurement;
    rdfs:subPropertyOf gufo:hasQualityValue.
:SnowMeasurement rdfs:label "Snow Measurement".
:SnowparkFeature rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :NamedIndividual, :GeospatialFeature, gufo:FunctionalComplex;
    rdf:type gufo:Kind;
    rdfs:label "Snowpark Feature".
:MediaObjectType rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:ConcreteIndividualType;
    rdfs:label "Media Object Type".
:LicenseType rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:ConcreteIndividualType;
    rdfs:label "License Type".
:SnowparkDifficulty rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:QualityValue;
    owl:equivalentClass [
  rdf:type owl:Class;
  owl:oneOf (:S :M :L :XL)
].
:S rdf:type :SnowparkDifficulty;
    rdf:label "S".
:M rdf:type :SnowparkDifficulty;
    rdf:label "M".
:L rdf:type :SnowparkDifficulty;
    rdf:label "L".
:XL rdf:type :SnowparkDifficulty;
    rdf:label "XL".
:SnowparkDifficulty rdfs:label "Snowpark Difficulty".
:UsDifficulty rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:QualityValue;
    owl:equivalentClass [
  rdf:type owl:Class;
  owl:oneOf (:Beginner :BeginnerIntermediate :Intermediate :IntermediateAdvanced :Advanced :Expert :TerrainPark)
].
:Beginner rdf:type :UsDifficulty;
    rdf:label "Beginner".
:BeginnerIntermediate rdf:type :UsDifficulty;
    rdf:label "BeginnerIntermediate".
:Intermediate rdf:type :UsDifficulty;
    rdf:label "Intermediate".
:IntermediateAdvanced rdf:type :UsDifficulty;
    rdf:label "IntermediateAdvanced".
:Advanced rdf:type :UsDifficulty;
    rdf:label "Advanced".
:Expert rdf:type :UsDifficulty;
    rdf:label "Expert".
:TerrainPark rdf:type :UsDifficulty;
    rdf:label "TerrainPark".
:UsDifficulty rdfs:label "US Difficulty".
:EuDifficulty rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:QualityValue;
    owl:equivalentClass [
  rdf:type owl:Class;
  owl:oneOf (:Novice :Beginner_XrIWWRaGAqCsIC1m :Intermediate_uMoWWRaGAqCsIC1p :Expert_5RoWWRaGAqCsIC1s)
].
:Novice rdf:type :EuDifficulty;
    rdf:label "Novice".
:Beginner_XrIWWRaGAqCsIC1m rdf:type :EuDifficulty;
    rdf:label "Beginner".
:Intermediate_uMoWWRaGAqCsIC1p rdf:type :EuDifficulty;
    rdf:label "Intermediate".
:Expert_5RoWWRaGAqCsIC1s rdf:type :EuDifficulty;
    rdf:label "Expert".
:EuDifficulty rdfs:label "EU Difficulty".
:LineString rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Geometry;
    rdf:type gufo:SubKind;
    rdfs:label "Line String".
:Polygon rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Geometry;
    rdf:type gufo:SubKind;
    rdfs:label "Polygon".
:Point rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Geometry;
    rdf:type gufo:SubKind;
    rdfs:label "Point".
:Geometry rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:Quality;
    rdf:type gufo:Kind.
:coordinates rdfs:label "coordinates";
    rdf:type owl:ObjectProperty;
    rdfs:domain :Geometry;
    rdfs:range :Coordinate;
    rdfs:subPropertyOf gufo:hasReifiedQualityValue.
:Geometry rdfs:label "Geometry".
:HoursSpecification rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:QualityValue.
:opens rdfs:label "opens".
:validfrom rdfs:label "valid from".
:dayofweek rdfs:label "day of week".
:closes rdfs:label "closes".
:validto rdfs:label "valid to".
:opens rdf:type owl:DatatypeProperty;
    rdfs:domain :HoursSpecification.
:validfrom rdf:type owl:DatatypeProperty;
    rdfs:domain :HoursSpecification.
:dayofweek rdf:type owl:ObjectProperty;
    rdfs:domain :HoursSpecification;
    rdfs:range :DayOfWeek.
:closes rdf:type owl:DatatypeProperty;
    rdfs:domain :HoursSpecification.
:validto rdf:type owl:DatatypeProperty;
    rdfs:domain :HoursSpecification.
:HoursSpecification rdfs:label "Hours Specification".
:Coordinate rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:QualityValue.
:elevation rdfs:label "elevation".
:latitude rdfs:label "latitude".
:longitude rdfs:label "longitude".
:elevation rdf:type owl:DatatypeProperty;
    rdfs:domain :Coordinate;
    rdfs:range xsd:float.
:latitude rdf:type owl:DatatypeProperty;
    rdfs:domain :Coordinate;
    rdfs:range xsd:float.
:longitude rdf:type owl:DatatypeProperty;
    rdfs:domain :Coordinate;
    rdfs:range xsd:float.
:Coordinate rdfs:label "Coordinate".
:SnowparkFeatureType rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:ConcreteIndividualType;
    rdfs:label "Snowpark Feature Type".
:TrailType rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:ConcreteIndividualType;
    rdfs:label "Trail Type".
:LiftType rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:ConcreteIndividualType;
    rdfs:label "Lift Type".
:EventSeries rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :NamedIndividual, gufo:FunctionalComplex;
    rdf:type gufo:Kind.
:frequency rdfs:label "frequency";
    rdf:type owl:DatatypeProperty;
    rdfs:domain :EventSeries;
    rdfs:subPropertyOf gufo:hasQualityValue.
:EventSeries rdfs:label "Event Series".
:EventType rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:ConcreteIndividualType;
    rdfs:label "Event Type".
:Snow rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:Quantity;
    rdf:type gufo:Kind;
    rdfs:label "Snow".
:TimeInterval rdfs:subClassOf gufo:QualityValue;
    rdfs:label "Time Interval".
:Time rdfs:subClassOf gufo:QualityValue;
    rdfs:label "Time".
:Frequency rdfs:subClassOf gufo:QualityValue;
    rdfs:label "Frequency".
:Multipoint rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Geometry;
    rdf:type gufo:SubKind;
    rdfs:label "Multi-Point".
:MultiLineString rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Geometry;
    rdf:type gufo:SubKind;
    rdfs:label "Multi Line String".
:Multipolygon rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Geometry;
    rdf:type gufo:SubKind;
    rdfs:label "Multi-Polygon".
:DayOfWeek rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:QualityValue;
    owl:equivalentClass [
  rdf:type owl:Class;
  owl:oneOf (:Sunday :Monday :Tuesday :Wednesday :Thursday :Friday :Saturday)
].
:Sunday rdf:type :DayOfWeek;
    rdf:label "Sunday".
:Monday rdf:type :DayOfWeek;
    rdf:label "Monday".
:Tuesday rdf:type :DayOfWeek;
    rdf:label "Tuesday".
:Wednesday rdf:type :DayOfWeek;
    rdf:label "Wednesday".
:Thursday rdf:type :DayOfWeek;
    rdf:label "Thursday".
:Friday rdf:type :DayOfWeek;
    rdf:label "Friday".
:Saturday rdf:type :DayOfWeek;
    rdf:label "Saturday".
:DayOfWeek rdfs:label "Day of Week".
:Range rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:QualityValue.
:lower rdfs:label "lower".
:upper rdfs:label "upper".
:lower rdf:type owl:DatatypeProperty;
    rdfs:domain :Range;
    rdfs:range xsd:int.
:upper rdf:type owl:DatatypeProperty;
    rdfs:domain :Range;
    rdfs:range xsd:int.
:Range rdfs:label "Range".
:Published rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :EventPlan;
    rdf:type gufo:Phase;
    rdfs:label "Published".
:MountainAreaType rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:ConcreteIndividualType;
    rdfs:label "Mountain Area Type".
:Difficulty rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf gufo:Quality;
    rdf:type gufo:Kind;
    rdfs:label "Difficulty".
:MediaType rdfs:subClassOf gufo:QualityValue;
    rdfs:label "Media Type".
`
