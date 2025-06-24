const hotspotData = [
  {
    label: "Assembly Point",
    icon: "assets/hotspot/icon/iottag.png",
    ...pixelToRatio(200, 550),
    isSpecial: false,
    medias: [
      { name: "Assembly Muster Point",
        desc: "Enable personnel to initiate a duress signal and evacuation procedures. SMS and email links are sent to management teams to facilitate a smooth and coordinated evacuation.", 
        url: "assets/hotspot/media/Assembly-Muster-Point.mp4",
        thumbImg: "assets/hotspot/thumbnail/assembly-point-thumbnail.png",
      }
    ]
  },
  {
    label: "Fall Detection + Man Down + SOS + Heatstress Monitoring",
    icon: "assets/hotspot/icon/engineer.png",
    ...pixelToRatio(637, 736),
    isSpecial: false,
    medias: [
      { name:"Fall Detection SOS",
        desc: "Instant alerts from helmet tags ensure critical events are actioned immediately.  Real-time updates allow first responders to react swiftly and locate personnel in distress.", 
        url: "assets/hotspot/media/Fall-Detection-SOS.mp4",
        thumbImg: "assets/hotspot/thumbnail/fall-detection-thumbnail.png" },
      { name: "Hazards",
        desc: "Instant alerts from helmet tags ensure critical events are actioned immediately.  Real-time updates allow first responders to react swiftly and locate personnel in distress.", 
        url: "assets/hotspot/2nd_media/fall-detection-SOS-2-hazards.mp4",
        thumbImg: "assets/hotspot/2nd_thumbnail/fall-detection-SOS-2-hazards-thumbnail.png" }
    ]
  },
  {
    label: "Trafic Signals",
    icon: "assets/hotspot/icon/iottag.png",
    ...pixelToRatio(522, 629),
    isSpecial: false,
    medias: [
    ]
  },
  {
    label: "Team Alert",
    icon: "assets/hotspot/icon/iottag.png",
    ...pixelToRatio(522, 629),
    isSpecial: false,
    medias: [
      { name: "Team Alert",
        desc: "Empower workers by providing real-time tools for managing safety and foster a safer work environment. Enhance compliance adherence and the overall well-being of the workforce.", 
        url: "assets/hotspot/media/Team-Alert.mp4",
        thumbImg: "assets/hotspot/thumbnail/team-alert-thumbnail.png" }
    ]
  },
  // {
  //   label: "Sustainabilty",
  //   ...pixelToRatio(624, 596),
  //   isSpecial: true,
  //   medias: []
  // },
  {
    label: "Air Quality + Wind Direction",
    icon: "assets/hotspot/icon/air-quality.png",
    ...pixelToRatio(720, 575),
    isSpecial: false,
    medias: [
      { name: "Air Quality",
        desc: "Monitoring levels in real time, ensuring safe working conditions by providing essential data for proactive risk management and compliance.", 
        url: "assets/hotspot/media/Air-Quality.mp4",
        thumbImg: "assets/hotspot/thumbnail/air-quality-thumbnail.png" },
      { name: "Sustainability Co2",
        desc: "Monitoring levels in real time, ensuring safe working conditions by providing essential data for proactive risk management and compliance.", 
        url: "assets/hotspot/2nd_media/air-quality-2-sustainability-co2.mp4",
        thumbImg: "assets/hotspot/2nd_thumbnail/air-quality-2-sustainability-co2-thumbnail.png" },
    ]
  },
  {
    label: "Logistics + Supply Chain",
    icon: "assets/hotspot/icon/logistics.png",
    ...pixelToRatio(849, 325),
    isSpecial: false,
    medias: [
      { name: "Logistics + Supply Chain",
        desc: "Enhance operational efficiency, enhances visibility, reducing delays and improving overall supply chain performance.", 
        url: "assets/hotspot/media/Logistics-supply-chain.mp4",
        thumbImg: "assets/hotspot/thumbnail/logistics-supply-chain-thumbnail.png" }
    ]
  },
  {
    label: "Toolbox Meeting",
    icon: "assets/hotspot/icon/iottag.png",
    ...pixelToRatio(843, 976),
    isSpecial: false,
    medias: [
      { name: "Toolbox Meeting",
        desc: "Streamline operations by integrating, accurately validate attendance via safety tags and deliver sessions information to contractor app's to manage action items.",
        url: "assets/hotspot/media/Toolbox-Meeting.mp4",
        thumbImg: "assets/hotspot/thumbnail/toolbox-meeting-thumbnail.png" }
    ]
  },
  {
    label: "Operator Tracking + Environmental Sensors",
    icon: "assets/hotspot/icon/engineer.png",
    ...pixelToRatio(818, 455),
    isSpecial: false,
    medias: [
      { name: "Operator Tracking Env Sensors",
        desc: "Enhancing safety tracking for machine and vehicle operators in challenging, uncomfortable and isolated spaces.", 
        url: "assets/hotspot/media/Operator-tracking-env-sensors.mp4",
        thumbImg: "assets/hotspot/thumbnail/operator-tracking-env-sensors-thumbnail.png" }
    ]
  },
  // {
  //   label: "Hazards",
  //   ...pixelToRatio(778, 867),
  //   isSpecial: true,
  //   medias: []
  // },
  {
    label: "Equipment Inspections",
    icon: "assets/hotspot/icon/checkbox.png",
    ...pixelToRatio(818, 683),
    isSpecial: false,
    medias: [
      { name: "Equipment Inspection",
        desc: "Streamline operations by integrating safety management and operational efficiency. Enable better decision-making, ensure compliance and boosts overall productivity and safety outcomes.", 
        url: "assets/hotspot/media/Equipment-Inspection.mp4",
        thumbImg: "assets/hotspot/thumbnail/equipment-inspection-thumbnail.png" },
      { name: "Tracking Equipment",
        desc: "Streamline operations by integrating safety management and operational efficiency. Enable better decision-making, ensure compliance and boosts overall productivity and safety outcomes.", 
        url: "assets/hotspot/2nd_media/Equipment-Inspection-2-tracking-equipment.mp4",
        thumbImg: "assets/hotspot/2nd_thumbnail/Equipment-Inspection-2-tracking-equipment-thumbnail.png" }
    ]
  },
  // {
  //   label: "Environmental Safety",
  //   ...pixelToRatio(920, 542),
  //   isSpecial: true,
  //   medias: []
  // },
  {
    label: "Occupancy Tracking",
    icon: "assets/hotspot/icon/engineer.png",
    ...pixelToRatio(1015, 617),
    isSpecial: false,
    medias: [
      { name: "Manrider-Occupants-ID",
        desc: "Real-time visibility and record keeping of personnel in isolated spaces.", 
        url: "assets/hotspot/media/Manrider-Occupants-ID.mp4",
        thumbImg: "assets/hotspot/thumbnail/manrider-occupants-thumbnail.png" }
    ]
  },
  {
    label: "Access Control",
    icon: "assets/hotspot/icon/iottag.png",
    ...pixelToRatio(1204, 141),
    isSpecial: false,
    medias: [
      { name: "Access Control",
        desc: "Monitoring compliance, improving worker safety and ensuring adherence to site regulations in real time.", 
        url: "assets/hotspot/media/Access Control.mp4",
        thumbImg: "assets/hotspot/thumbnail/access-control-thumbnail.png" }
    ]
  },
  {
    label: "Tag + PPE Verification",
    icon: "assets/hotspot/icon/iottag.png",
    ...pixelToRatio(1285, 141),
    isSpecial: false,
    medias: [
      { name: "Tag-PPE-Verification",
        desc: "Monitoring compliance, improving worker safety and ensuring adherence to site regulations in real time.", 
        url: "assets/hotspot/media/Tag-PPE-Verification.mp4",
        thumbImg: "assets/hotspot/thumbnail/tag-ppe-verifcation-thumbnail.png" },
      { name: "compliance-adherence-ppe",
        desc: "Monitoring compliance, improving worker safety and ensuring adherence to site regulations in real time.", 
        url: "assets/hotspot/2nd_media/Tag-PPE-Verification-2-compliance-adherence-ppe.mp4",
        thumbImg: "assets/hotspot/2nd_thumbnail/Tag-PPE-Verification-2-compliance-adherence-ppe-thumbnail.png" }
    ]
  },
  // {
  //   label: "Compliance Adherence",
  //   ...pixelToRatio(1363, 141),
  //   isSpecial: true,
  //   medias: []
  // },
  {
    label: "Traffic Management",
    icon: "assets/hotspot/icon/iottag.png",
    ...pixelToRatio(1123, 596),
    isSpecial: true,
    medias: [
      { name: "Traffic-Control",
        desc: "Fully integrated to enhance safety and control, providing real-time guidance to workers and vehicles, helping prevent accidents and improve workflow efficiency.", 
        url: "assets/hotspot/media/Traffic-Control.mp4",
        thumbImg: "assets/hotspot/thumbnail/traffic-control-thumbnail.png" },
      { name: "Traffic Management",
        desc: "Fully integrated to enhance safety and control, providing real-time guidance to workers and vehicles, helping prevent accidents and improve workflow efficiency.", 
        url: "assets/hotspot/2nd_media/traffic-control-2-traffic-management.mp4",
        thumbImg: "assets/hotspot/2nd_thumbnail/traffic-control-2-traffic-management-thumbnail.png" },
      { name: "Vehicle Tracking",
        desc: "Fully integrated to enhance safety and control, providing real-time guidance to workers and vehicles, helping prevent accidents and improve workflow efficiency.", 
        url: "assets/hotspot/2nd_media/traffic-control-3-vehicle-tracking.mp4",
        thumbImg: "assets/hotspot/2nd_thumbnail/traffic-control-3-vehicle-tracking-thumbnail.png" }
    ]
  },
  // {
  //   label: "Fatigue Management",
  //   ...pixelToRatio(1276, 759),
  //   isSpecial: true,
  //   medias: []
  // },
  {
    label: "Personnel Safety Tracking",
    icon: "assets/hotspot/icon/engineer.png",
    ...pixelToRatio(1216, 586),
    isSpecial: false,
    medias: [
      { name: "Personal Safety Tracking",
        desc: "Enhancing worker safety by enabling escalaition of emergencies and providing immediate response to danger.", 
        url: "assets/hotspot/media/Personal-Safety-Tracking.mp4",
        thumbImg: "assets/hotspot/thumbnail/personnel-safety-tracking-thumbnail.png" },
      { name: "Fatigue Management",
        desc: "Enhancing worker safety by enabling escalaition of emergencies and providing immediate response to danger.", 
        url: "assets/hotspot/2nd_media/personnel-safety-tracking-2-fatigue-management.mp4",
        thumbImg: "assets/hotspot/2nd_thumbnail/personnel-safety-tracking-2-fatigue-management-thumbnail.png" },
      { name: "Tracking Personnel",
        desc: "Enhancing worker safety by enabling escalaition of emergencies and providing immediate response to danger.", 
        url: "assets/hotspot/2nd_media/personnel-safety-tracking-3-tracking-personnel.mp4",
        thumbImg: "assets/hotspot/2nd_thumbnail/personnel-safety-tracking-3-tracking-personnel-thumbnail.png" },
      { name: "Indoor Map",
        desc: "Enhancing worker safety by enabling escalaition of emergencies and providing immediate response to danger.", 
        url: "assets/hotspot/2nd_media/personnel-safety-tracking-4-indoor-map.mp4",
        thumbImg: "assets/hotspot/2nd_thumbnail/personnel-safety-tracking-4-indoor-map-thumbnail.png" }
    ]
  },
  {
    label: "Safety Inspections",
    icon: "assets/hotspot/icon/checkbox.png",
    ...pixelToRatio(1318, 553),
    isSpecial: false,
    medias: [
      { name: "Safety Inspection",
        desc: "Streamline operations by integrating safety management and operational efficiency. Enable better decision-making, ensure compliance and boosts overall productivity and safety outcomes.", 
        url: "assets/hotspot/media/Safety-Inspection.mp4",
        thumbImg: "assets/hotspot/thumbnail/safety-inspection-thumbnail.png" }
    ]
  },
  {
    label: "Segment Erector Safe Zone",
    icon: "assets/hotspot/icon/engineer.png",
    ...pixelToRatio(1678, 141),
    isSpecial: false,
    medias: [
    ]
  },
  {
    label: "Refuge Chamber",
    icon: "assets/hotspot/icon/engineer.png",
    ...pixelToRatio(1708, 466),
    isSpecial: false,
    medias: [
      { name: "Refuge Chamber",
        desc: "Real-time visibility and record keeping of personnel in isolated spaces.", 
        url: "assets/hotspot/media/Refuge-Chamber.mp4",
        thumbImg: "assets/hotspot/thumbnail/refuge-chamber-thumbnail.png" }
    ]
  }
];

// ============= Helper: Convert Pixel to Ratio =============
function pixelToRatio(pixelX, pixelY, imgWidth = 1920, imgHeight = 1084) {
  return {
    x: +(pixelX / imgWidth).toFixed(5),
    y: +(pixelY / imgHeight).toFixed(5),
  };
}