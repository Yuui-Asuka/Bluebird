package com.bluebird.utils;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import java.io.StringReader;
import java.io.StringWriter;
import java.io.UnsupportedEncodingException;

/**
 * xml工具类
 */
public class XmlUtils {

    /**
     * 实体转xml
     * @param obj
     * @param load
     * @param is_fragment 是否去掉默认报文头
     * @return
     * @throws JAXBException
     */
    public static String beanToXml(Object obj, Class<?> load, boolean is_fragment) throws JAXBException, UnsupportedEncodingException {
        JAXBContext context = JAXBContext.newInstance(load);
        Marshaller marshaller = context.createMarshaller();
        marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
        marshaller.setProperty(Marshaller.JAXB_FRAGMENT, is_fragment);
        StringWriter writer = new StringWriter();
        marshaller.marshal(obj,writer);
        return writer.toString();
    }

    /**
     * xml字符转对象
     * @param xmlStr
     * @param load
     * @return
     * @throws JAXBException
     */
    public static Object xmlToBean(String xmlStr, Class<?> load) throws JAXBException {
        JAXBContext context = JAXBContext.newInstance(load);
        // 进行将Xml转成对象的核心接口
        Unmarshaller unmarshaller = context.createUnmarshaller();
        StringReader sr = new StringReader(xmlStr);
        return unmarshaller.unmarshal(sr);
    }
}
