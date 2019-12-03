<br />
<el-form ref="custom-meta-box-form" :model="form" label-width="40%" label-position="left">
  <el-tabs type="card">
    <el-tab-pane>
      <span slot="label"><i class="fi flaticon-settings-2"></i> <?php _e('General', 'flintotheme') ?></span>
      <?php 
      /**
       * Hooks
       * @see flintotheme_metabox_customize_settings_inner_general_heading_bar - 20 
       * @see flintotheme_metabox_customize_settings_inner_general_header - 24
       * @see flintotheme_metabox_customize_settings_inner_general_footer - 28
       * @see flintotheme_metabox_customize_settings_inner_general_layout - 32
       * @see flintotheme_metabox_customize_settings_inner_general_sidebar - 36
       */
      do_action( 'flintotheme_metabox_customize_settings_inner_general' ); 
      ?>
    </el-tab-pane>

    <?php 
    /**
     * Hooks
     * @see flintotheme_metabox_customize_heading_bar_settings_panel - 20
     */
    do_action( 'flintotheme_metabox_customize_settings_after_general' ); 
    ?>
  </el-tabs>
</el-form>
