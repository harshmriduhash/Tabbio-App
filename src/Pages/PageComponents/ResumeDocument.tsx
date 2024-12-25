import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";







const ResumePDF = ({ resumeData }: {resumeData:any}) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      padding: 30,
      fontFamily: "Helvetica",
    },
    section: {
      marginBottom: 15,
    },
    header: {
      fontSize: 24,
      marginBottom: 10,
      fontWeight: "bold",
      color: resumeData?.style?.primary_color || "black",
    },
    text: {
      fontSize: 12,
      color: "#333",
    },
    listItem: {
      marginBottom: 5,
      fontSize: 12,
    },
    link: {
      color: resumeData?.style?.primary_color || "blue",
      textDecoration: "underline",
    },
    headerDiv: {
        display: 'flex',
        alignItems: 'center',
        gap: '36px',
        marginBottom: '40px'
    }
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.headerDiv}>
            <View style={{position: 'relative', width: '220px', height: '220px', borderRadius: '9999px', border: '1px', borderColor: 'rgb(226 232 240 / 0.6)'}}>
            {resumeData?.photo_url && (
            <Image
              src={resumeData?.photo_url}
              style={{ width: '100%', height: '100%', objectFit: 'object-cover', borderRadius: "50%" }}
            />
          )}
            </View>
         
           <View>
           <Text style={{color: resumeData?.style?.primary_color || "black", marginBottom: '1px'}}>{resumeData?.name}</Text>
           {resumeData?.role && <Text>{resumeData?.role}</Text>}
           </View>
          
        </View>

        {/* About Me Section */}
        {resumeData?.professional_summary && (
          <View style={styles.section}>
            <Text style={styles.header}>About Me</Text>
            <Text style={styles.text}>{resumeData?.professional_summary}</Text>
          </View>
        )}

        {/* Contact Information */}
        <View style={styles.section}>
          {resumeData?.email && <Text style={styles.text}>Email: {resumeData?.email}</Text>}
          {resumeData?.phone_number && (
            <Text style={styles.text}>Phone: {resumeData?.phone_number}</Text>
          )}
          {resumeData?.linkedin_url && (
            <Text style={styles.text}>
              LinkedIn:{" "}
              <Text style={styles.link}>{resumeData?.linkedin_url}</Text>
            </Text>
          )}
          {resumeData?.website_url && (
            <Text style={styles.text}>
              Website: <Text style={styles.link}>{resumeData?.website_url}</Text>
            </Text>
          )}
        </View>

        {/* Experience */}
        {resumeData?.experience && (
          <View style={styles.section}>
            <Text style={styles.header}>Experience</Text>
            {resumeData?.experience.map((item:any, index:number) => (
              <View key={index}>
                <Text style={styles.text}>{item?.company}</Text>
                <Text style={styles.text}>
                  {item?.position} ({item?.duration})
                </Text>
                <Text style={styles.text}>{item?.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {resumeData?.education && (
          <View style={styles.section}>
            <Text style={styles.header}>Education</Text>
            {resumeData?.education.map((item:any, index:number) => (
              <View key={index}>
                <Text style={styles.text}>{item?.school}</Text>
                <Text style={styles.text}>
                  {item?.degree} ({item?.duration})
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {resumeData?.skills && (
          <View style={styles.section}>
            <Text style={styles.header}>Skills</Text>
            {resumeData?.skills.map((skill:any, index:number) => (
              <Text key={index} style={styles.listItem}>
                • {skill}
              </Text>
            ))}
          </View>
        )}

        {/* Languages */}
        {resumeData?.languages && (
          <View style={styles.section}>
            <Text style={styles.header}>Languages</Text>
            {resumeData?.languages.map((lang:any, index:number) => (
              <Text key={index} style={styles.listItem}>
                • {lang}
              </Text>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};



export default ResumePDF;