package io.chicken.filter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * <p>
 * 解决跨域Filter（不是 Interceptor）
 *
 * @date 	2017-08-20
 * @version 1.0.0
 */
public class CrossFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {}

    /**
     * <p>
     * 解决跨域问题
     *
     */
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest servletRequest = (HttpServletRequest) request;
        HttpServletResponse servletResponse = (HttpServletResponse) response;
        servletResponse.setHeader("Access-Control-Allow-Origin", servletRequest.getHeader( "Origin" ) );
        servletResponse.setHeader("Access-Control-Allow-Methods", servletRequest.getHeader( "Access-Control-Allow-Method" ));
        servletResponse.setHeader("Access-Control-Allow-Headers", servletRequest.getHeader( "Access-Control-Request-Headers" ));

        servletResponse.setHeader("Access-Control-Max-Age", "86400" );
        servletResponse.setHeader("Access-Control-Allow-Credentials", "true");

        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {}
}
